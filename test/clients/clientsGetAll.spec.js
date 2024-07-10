import { expect } from 'chai';
import * as Client from '../../helpers/client.helper';
const chance = require('chance').Chance();

describe('GET ALL CLIENTS', () => {
  let res;
  describe('GET ALL CLIENTS POSITIVE', () => {
    before(async () => {
      await Client.createClient(chance.name(), chance.phone())
      res = await Client.getAll();
      console.log(res.body)
    });

    it('verify status code ', () => {
      expect(res.statusCode).to.eq(200);
    });

    it('verify response message', () => {
      expect(res.body.message).to.eq('ClientSearch ok');
    });

    it('verify response contains array of clients', () => {
      expect(res.body.payload.items).to.be.a('array');
    });

    it('verify response message', () => {
      expect(res.body.message).to.eq('ClientSearch ok');
    });

  });

  // describe('GET ALL CLIENTS NEGATIVE', () =>{
  //   describe('', () => {
  //     before(async() => {
  //       await Client.createClient(chance.name(), chance.phone())
  //     })



  //   })
  // })
});
