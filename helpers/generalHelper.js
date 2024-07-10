import request from 'supertest'
import {user} from './user'
const chance = require('chance').Chance() 

const newEmail = 'user_' + Date.now() + '@gmail.com'

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


export async function signUpNew(firstName, lastName, email, password = process.env.PASSWORD){
    return request(process.env.BASE_URL)
    .post('/user')
    .send({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password

    })

}


export function register(data){
    return request(process.env.BASE_URL)
    .post('/user')
    .send(data)
}


export function emailSearch(email){
    return request('https://clientbase-server-edu-dae6cac55393.herokuapp.com')
    .post('/email/search')
    .send({email: email})
}





