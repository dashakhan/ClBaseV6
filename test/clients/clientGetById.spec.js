import { expect } from 'chai';
import * as Client from '../../helpers/client.helper';
const chance = require('chance').Chance();
import request from 'supertest';

let res, id, clientRes
let clientArr = []

describe('GET CLIENT BY ID', () => {
  
    let res1, id1, clientRes1
    let clientArr1 = []

    describe('GET CLIENT BY ID POSITIVE', () => {
        before(async() => {
            clientRes = await Client.createClient(chance.name(), chance.phone())
            id = clientRes.body.payload
            res = await Client.getClientById(id)
            clientArr.push(id)
         })

        after(async() => {
            for(let i = 0; i < clientArr.length; i++){

                await Client.deleteClient(clientArr[i])
            }
        })
        it('verify status code ', () => {
            expect(res.statusCode).to.eq(200);
        });

        it('verify response message', () => {
            expect(res.body.message).to.eq('Get Client by id ok');
        });

        it('verify response id is exact', () => {
            expect(res.body.payload._id).to.eq(id);
        });
    })


    describe('GET CLIENT BY ID NEGATIVE', () => {
        before(async() => {
            clientRes = await Client.createClient(chance.name(), chance.phone())
            id = clientRes.body.payload
            res = await Client.getClientById(id)
            console.log('====/',clientArr)
            clientArr.push(id)
         })

        after(async() => {
            for(let i = 0; i < clientArr.length; i++){
                await Client.deleteClient(clientArr[i])
            }
        })

        it('verify response id is exact', () => {
            console.log(id)
            expect(res.body.payload._id).to.not.eq(id + 111);
        });
    })
})