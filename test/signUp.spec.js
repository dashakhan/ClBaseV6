import { expect } from 'chai';
import { signUp } from '../helpers/generalHelper';
import { user } from '../helpers/user';
import exp from 'constants';

describe.only('SIGNUP', () => {
  describe('SIGNUP POSITIVE', () => {
    let res;

    before(async () => {
      res = await signUp(user);
    });

    it('verify status code is 201', () => {
      expect(res.status).to.eq(201);
    });

    it('verify message is "User created successfully. Please check your email and verify it"', () => {
      expect(res.body.message).to.eq(
        'User created successfully. Please check your email and verify it'
      );
    });

    it('verify success is true', () => {
      expect(res.body.success).to.eq(true);
    });

    it('verify success is true', () => {
      expect(res.body.success).to.eq(true);
    });
  });

  describe('SIGNUP NEGATIVE', () => {
    let res;

    describe('USER CANT SIGN UP W/O EMAIL', () => {
      before(async () => {
        user.email = '';
        res = await signUp(user);
      });

      it('verify status code is 404', () => {
        expect(res.status).to.eq(404);
      });

      it('verify message: "User was not created"', () => {
        expect(res.body.message).to.eq('User was not created');
      });
      it('verify success is false', () => {
        expect(res.body.success).to.eq(false);
      });
    });

    describe('USER CANT SIGN UP W/O FIRST NAME', () => {
      before(async () => {
        user.firstName = '';
        res = await signUp(user);
      });

      it('verify status code is 404', () => {
        expect(res.status).to.eq(404);
      });

      it('verify message: "User was not created"', () => {
        expect(res.body.message).to.eq('User was not created');
      });

      it('verify content type "application/json"', () => {
        expect(res.type).to.eq('application/json');
      });
    });

    describe('USER CANT SIGN UP W/O LAST NAME', () => {
      before(async () => {
        user.lastName = '';
        res = await signUp(user);
      });

      it('verify status code is 404', () => {
        expect(res.status).to.eq(404);
      });

      it('verify message: "User was not created"', () => {
        expect(res.body.message).to.eq('User was not created');
      });

      it('verify content type "application/json"', () => {
        expect(res.type).to.eq('application/json');
      });
    });

    describe('USER CANT SIGN UP W/O PASSWORD', () => {
      before(async () => {
        user.password = '';
        res = await signUp(user);
      });

      it('verify status code is 400', () => {
        expect(res.status).to.eq(400);
      });

      it('verify message is "Wrong password format"', () => {
        expect(res.body.message).to.eq('Wrong password format');
      });
    });
    // describe('USER CANT SIGN UP WITH ALL FIELDS EMPTY', () => {
    //   before(async () => {
    //     user.firstName = ''
    //     user.lastName = ''
    //     user.email = ''
    //     user.password = ''
    //     res = await signUp(user);
    //     console.log(res.body, 'Neg user -----');
    //   });

    //   it('verify status code is 404', () => {
    //     expect(res.status).to.eq(404);
    //   });
    // })
  });
});
