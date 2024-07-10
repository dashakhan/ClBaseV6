import request from 'supertest';
import { expect } from 'chai';
import * as Client from '../../helpers/client.helper';
const chance = require('chance').Chance();

describe('DELETE CLIENT', () => {
  let res;
  describe('Delete client POSITIVE', () => {
    before(async () => {
      const clientId = (await Client.createClient(chance.name(), chance.phone())).body.payload;
      
      res = await Client.deleteClient(clientId)
    });

    it('verify status code', () => {
      console.log(res.body);
      expect(res.statusCode).to.eq(200);
    });
  });
});
