import { expect } from 'chai';
const chance = require('chance').Chance();
import { register } from '../helpers/generalHelper';
import { generateSignUpBody } from '../helpers/constants';

describe('REG', () => {
  let res;

  describe('REGISTER POSITIVE', () => {
    //console.log(signUpBody);

    before(async () => {
      res = await register(generateSignUpBody());
    });


    it('verify status code', async () => {
      expect(res.status).to.eq(201);
    });

    it('verify response message', async () => {
      expect(res.body.message).contain('User created');
    });
  });



  describe('REGISTER NEGATIVE', () => {

    describe('reg with existing email', () => {
      const existingEmailData = { ...generateSignUpBody(), email: process.env.EMAIL };
      
      before(async () => {
        res = await register(existingEmailData);
        //console.log(res.body, '1')
      });


      it('verify status code', () => {
        expect(res.status).to.eq(409);
       
      });
    });



    describe('REGISTER WITHOUT FIRST NAME', () =>{
   
      before(async() =>{
        const noFirstNameData = {...generateSignUpBody(), firstName: ''}
        res = await register(noFirstNameData)
        console.log(res.body, '2')
      })

      it('verify status code', () =>{
        expect(res.status).to.eq(404)
      })
    })
  });
});
