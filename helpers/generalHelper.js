import request from 'supertest'
import {user} from './user' 



export function login(email, password){
    return request(process.env.BASE_URL)
    .post('/user/login')
    .send({email: email, password: password})
    //  .send({email, password}) if key and value is the same we can shorten it 
}

//export default {login} - another way of export

export async function signUp(user){
    return await request(process.env.BASE_URL)
    .post('/user')
    .send(user)

}

// export async function signUpNegative(user){
//     return await request(process.env.BASE_URL)
//     .post('user/register')
//     .send(user)

// }


