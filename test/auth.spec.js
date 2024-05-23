import request from 'supertest'
import {expect} from 'chai'
import 'dotenv/config'

describe('AUTHENTIFICATION', () => {
    
    describe('POSITIVE AUTHENTIFICATION',  () => {
        let res;
        before(async()=>{
            res = await request(process.env.BASE_URL)
            .post('user/login')
            .send({email: process.env.EMAIL, password: process.env.PASSWORD})
        })


        it('verify status code', async () => {
        expect(res.status).to.eq(200)
        console.log(process.env.TOKEN);
         })


         it('verify response message', async () => {
            expect(res.body.message).to.eq('Auth success')
        })
    
});



describe('NEGATIVE AUTHENTIFICATION', () =>{
    let res;
    before(async()=>{        
        res = await request(process.env.BASE_URL)
        .post('user/login')
        .send({email: process.env.INVALID_EMAIL, password: process.env.INVALID_PASSWORD})

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