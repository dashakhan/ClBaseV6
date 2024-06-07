const chance = require('chance').Chance();

export const newEmail = () =>{
    return 'user_' + Date.now() + '@gmail.com'}

export const signUpBody = {
    firstName: chance.first(),
    lastName: chance.last(),
    email: newEmail(),
    password: "Password1234!!"
}


export const generateSignUpBody = () => ({
    firstName: chance.first(),
    lastName: chance.last(),
    email: newEmail(),
    password: "Password1234!!"
})