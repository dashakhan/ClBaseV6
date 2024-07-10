import { expect } from 'chai';
const chance = require('chance').Chance();
//import { createClient } from '../../helpers/clientHelper';
import * as Client from '../../helpers/client.helper';

describe('CLIENT CREATE', () => {
  let res;
  let clientArr = []

  describe('CLIENT CREATE POSITIVE', () => {

    after(async() => {
      for(let i = 0; i < clientArr.length; i++){
        await Client.deleteClient(clientArr[i]._id)  
      } 
      //await Client.getClientById()
      console.log(clientArr)
    })
   


    describe('CLIENT CREATE ALL DATA', () => {
      before(async () => {
        res = await Client.createClient(
          chance.name(),
          chance.phone(),
          chance.email(),
          chance.sentence()
        );
        clientArr.push(res.body.payload)
        console.log(clientArr)
      });


      it('Verify status code', () => {
        expect(res.statusCode).to.eq(200);
      });

      it('Verify status code', () => {
        expect(res.body.message).to.eq('Client created');
      });

      it('Verify response has a payload', () => {
        expect(res.body.payload).to.not.be.empty;
        expect(res.body.payload).to.be.a('string');
      });
    });

     
    describe('CLIENT CREATE REQ DATA ONLY', () => {
      before(async () => {
        res = await Client.createClient(chance.name(), chance.phone());
        clientArr.push(res.body.payload)
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
        res = await Client.createClient('', chance.phone());
      });

      it('Verify status code', async () => {
        expect(res.statusCode).to.eq(400);
      });
    });


    // describe.skip('client create w/o phone', () => {
    //   before(async () => {
    //     res = await Client.createClient(chance.name(), '' )
    //   });
    //   //bug

    //   it('Verify status code', async () => {
    //     expect(res.statusCode).to.eq(400);
    //   });
    // });

  });


});

