import {expect} from 'chai'
import {login} from '../helpers/generalHelper'
//import 'dotenv/config'  - used to be here, but since we have it in a file/no need
//import request from 'supertest' - used to be here as well, but now we moved 'request' into helpers

describe('AUTHENTIFICATION', () => {
    let res;
    describe('POSITIVE AUTHENTIFICATION',  () => {
        before(async()=>{
        res = await login(process.env.EMAIL, process.env.PASSWORD)
        })

        it('verify status code', async () => {
        expect(res.status).to.eq(200)
         })

         it('verify response message', async () => {
        expect(res.body.message).to.eq('Auth success')
        })
    
});


describe('NEGATIVE AUTHENTIFICATION', () =>{
    describe('login with invalid email', ()=>{

    before(async() => {        
        res = await login('', process.env.PASSWORD)

    })
    it('verify status code is 400', async ()=>{
        expect(res.status).to.eq(400)   
    })

    it('verify body message - Auth fail ', async ()=>{
        expect(res.body.message).to.eq('Auth failed')
    })

    it('verify response body success - is false', async ()=>{
        expect(res.body.success).to.eq(false)
    })
})


 describe('login with invalid password', ()=>{

    before(async()=>{        
        res = await login(process.env.EMAIL, '')

    })
    it('verify status code is 400', async ()=>{
        expect(res.status).to.eq(400)   
    })

    it('verify body message - Auth fail ', async ()=>{
        expect(res.body.message).to.eq('Auth failed')
    })

    it('verify response body success - is false', async ()=>{
        expect(res.body.success).to.eq(false)
    })
})
})
})