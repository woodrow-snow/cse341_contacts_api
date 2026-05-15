const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Woodrow Snow Contacts API',
    description: 'This is the contacts API built in week 1 and 2 of CSE341'
  },
  host: 'https://cse341-contacts-api-n92e.onrender.com'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);
