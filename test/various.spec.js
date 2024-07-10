//import { signUpNew, login, emailSearch } from '../helpers/generalHelper';
import * as generalHelper from '../helpers/generalHelper'
import { expect } from 'chai';
//import {request} from 'supertest' 
const request = require('supertest')

describe('verify email trim on sign up', () => {
  let res;
  const newEmail = '      user' + Date.now() + '@gmail.com    ';
  const trimmedEmail = newEmail.trim();

  before(async () => {
    const signUpRes = await generalHelper.signUpNew(
      'Dash',
      'Khan',
      newEmail,
      process.env.PASSWORD
    );
    expect(signUpRes.status).to.eq(201);
    res = await generalHelper.login(trimmedEmail, process.env.PASSWORD);
  });
  it('verify status code', async () => {
    expect(res.status).to.eq(200);
  });

  it('verify response message', async () => {
    expect(res.body.message).to.eq('Auth success');
  });
});

//email conformation
//1.sign up user
//2.confirm email-search page https://clientbase.us/email
//3.login

describe('email conformation', () => {
    const newEmail = 'dash' + Date.now() + '@gmail.com'
    let res, str, endpoint

 it('verify status code', async () =>{

    await generalHelper.signUpNew('Dasha', 'Khan', newEmail, process.env.PASSWORD)

    res = await generalHelper.login(newEmail, process.env.PASSWORD)
    //roles before conformation
    //console.log(res.body.payload.user.roles)
    //expect(res.body.payload.user.roles).to.eq([ 'new', 'companyOwner' ])
    //console.log(res.body.payload.acl) 
    //actions that user allowed to make before conf
    //expect(res.body.payload.acl).to.eq(['user.auth','user.delete.any','user.update.any','companyAccount.update.own'])


    str = await generalHelper.emailSearch(newEmail)
   
    endpoint = str.body.payload.items[0].message.split('\n')[4].split('https://clientbase.pasv.us')[1]

    const confirmResponse = await request('https://clientbase-server-edu-dae6cac55393.herokuapp.com').get(endpoint).send()

    res = await generalHelper.login(newEmail, process.env.PASSWORD)
     //roles after conformation
    console.log(res.body.payload.user.roles)
    expect(res.body.payload.user.roles).to.include('verified')
    //actions after conf
    //console.log(res.body.payload.acl) 
    expect(res.body.payload.acl).to.include('client.create.own')
 })
});
