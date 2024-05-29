import request from 'supertest'



export function login(email, password){
    return request(process.env.BASE_URL)
    .post('user/login')
    .send({email: email, password: password})
    //  .send({email, password}) if key and value is the same we can shorten it 
}

//export default {login} - another way of export


