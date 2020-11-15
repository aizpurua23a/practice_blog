require('dotenv').config()

const userCredentials = { firstaname: 'Adri'};
const userDetails = { nationality: 'Basque'};

const user = {
    ...userCredentials,
    ...userDetails
};

console.log(user);
console.log(process.env.SOME_ENV_VARIABLE)