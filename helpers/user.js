import { faker } from "@faker-js/faker";


export const user = {
  companyName: 'Hello LLC',
  firstName: 'Daria',
  lastName: 'Khan',
  email: faker.internet.email().toLowerCase(),
  password: 'Password1!',
};

//const { companyName, email } = user
