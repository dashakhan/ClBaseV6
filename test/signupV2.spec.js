import { expect } from 'chai';
const chance = require('chance').Chance();
import { signUpNew } from '../helpers/generalHelper';
import { log } from 'console';

describe('SIGNUP', () => {
  let res;

  describe('POSITIVE SIGN UP', () => {



    before(async () => {
      const newEmail = 'user_' + Date.now() + '@gmail.com';
      res = await signUpNew(
        chance.first(),
        chance.last(),
        newEmail
      );
      console.log('desc-1', newEmail)
    });

    it('status code', async () => {
      expect(res.status).to.eq(201);
    });

    it('verify response message', async () => {
      expect(res.body.message).contain('User created');
    });
  });



  

  describe('NEGATIVE', () => {

    describe('create user with existing email', () => {

      before(async() =>{
        res = await signUpNew(chance.first(), chance.last(), process.env.EMAIL);
      })


      it('verify status code', async () => {
        expect(res.status).to.eq(409);
      });

      it('verify response message', async () => {
        expect(res.body.message).contain('exists'); 
      });
    });





    describe('create user without first name', async () => {

      before(async() =>{
      const newEmail = 'user_' + Date.now() + '@gmail.com';
      res = await signUpNew('', chance.last(), newEmail)
      console.log('desc-2', newEmail)
     //console.log(res.body)
      })
      
        it('verify status code', async () => {
          expect(res.status).to.eq(404)
        });

        it('verify response message', async () => {
           expect(res.body.message).contain('User was not created');
        });
      });
  });
});
