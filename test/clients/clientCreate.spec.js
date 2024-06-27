import request from 'supertest';
import { expect } from 'chai';
const chance = require('chance').Chance();
import { createClient } from '../../helpers/client.helper';

describe('CLIENT CREATE', () => {
  let res;
  describe('CLIENT CREATE POSITIVE', () => {
    describe('CLIENT CREATE ALL DATA', () => {
      before(async () => {
        res = await createClient(
          chance.name(),
          chance.phone(),
          chance.email(),
          chance.sentence()
        );
      });

      it('Verify status code', async () => {
        expect(res.statusCode).to.eq(200);
      });

      it('Verify status code', async () => {
        expect(res.body.message).to.eq('Client created');
      });
      it('Verify response has a payload', async () => {
        expect(res.body.payload).to.not.be.empty;
        expect(res.body.payload).to.be.a('string');
      });
    });
    describe('CLIENT CREATE REQ DATA ONLY', () => {
      before(async () => {
        res = await createClient(chance.name(), chance.phone());
      });

      it('Verify status code', async () => {
        expect(res.statusCode).to.eq(200);
      });

      it('Verify status code', async () => {
        expect(res.body.message).to.eq('Client created');
      });
      it('Verify response has a payload', async () => {
        expect(res.body.payload).to.not.be.empty;
        expect(res.body.payload).to.be.a('string');
      });
    });
  });
  describe('CLIENT CREATE NEGATIVE', () => {

    describe('create client w/o name', () => {
      before(async () => {
        res = await createClient('', chance.phone())
      });

      it('Verify status code', async () => {
        expect(res.statusCode).to.eq(400);
      });
    });
    // describe.skip('client create w/o phone', () => {
    //   before(async () => {
    //     res = await createClient(chance.name(), '' )
    //   });
    //   //bug

    //   it('Verify status code', async () => {
    //     expect(res.statusCode).to.eq(400);
    //   });
    // });
  });
});
