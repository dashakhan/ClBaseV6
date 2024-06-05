import request from 'supertest';
import 'dotenv/config';
import { login } from '../helpers/generalHelper';

// before(async () => {
//   const res = await request(process.env.BASE_URL)
//     .post('user/login')
//     .send({ email: process.env.EMAIL, password: process.env.PASSWORD });
//   process.env.TOKEN = res.body.payload.token;
// });

before(async () => {

  console.log('===============================');
  const res = await login(process.env.EMAIL, process.env.PASSWORD);
  process.env.TOKEN = res.body.payload.token;
});





