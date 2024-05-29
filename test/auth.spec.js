import { expect } from 'chai';
import { login } from '../helpers/generalHelper';
//import 'dotenv/config'  - used to be here, but since we have it in a file/no need
//import request from 'supertest' - used to be here as well, but now we moved 'request' into helpers

describe('AUTHENTIFICATION', () => {
  let res;

  describe('POSITIVE AUTHENTIFICATION', () => {
    before(async () => {
      res = await login(process.env.EMAIL, process.env.PASSWORD);
    });

    it('verify status code', async () => {
      expect(res.status).to.eq(200);
    });

    it('verify response message', async () => {
      expect(res.body.message).to.eq('Auth success');
    });

    it('verify typeof token is a string', async () => {
      expect(typeof res.body.payload.token).to.eq('string');
    });

    it('verify response email matches request email', async () => {
      expect(res.request._data.email).to.eq(process.env.EMAIL);
    });
  
  });

  describe('NEGATIVE AUTHENTIFICATION', () => {
    describe('login with invalid email', () => {
      before(async () => {
        res = await login('', process.env.PASSWORD);
      });
      it('verify status code is 400', async () => {
        expect(res.status).to.eq(400);
      });

      it('verify body message - Auth fail ', async () => {
        expect(res.body.message).to.eq('Auth failed');
      });

      it('verify response body success - is false', async () => {
        expect(res.body.success).to.eq(false);
      });

      it('verify status message - "Bad Request" ', async () => {
        expect(res.res.statusMessage).to.eq( 'Bad Request');
      });

      it('verify header', async () => {
        expect(res.request.header).to.deep.eq({ 'Content-Type': 'application/json' });
      });
    });

    describe('login with invalid password', () => {
      before(async () => {
        res = await login(process.env.EMAIL, '');
      });
      it('verify status code is 400', async () => {
        expect(res.status).to.eq(400);
      });

      it('verify body message - Auth fail ', async () => {
        expect(res.body.message).to.eq('Auth failed');
      });

      it('verify response body success - is false', async () => {
        expect(res.body.success).to.eq(false);
      });
      it('verify status message - "Bad Request" ', async () => {
        expect(res.res.statusMessage).to.eq( 'Bad Request');
      });
    });
  });
});
