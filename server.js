// =============================
// = Required Statements
// =============================
const express = require('express');
const mongo = require('./data/database');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger-output.json');

// creating app
const app = express();

// =============================
// = Middleware
// =============================
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// =============================
// = Routes
// =============================
app.use('/', require('./routes'));

// =============================
// = Local Server Info
// =============================
const port = process.env.PORT || 5500;

// =============================
// = Log statement to confirm server operation
// =============================

mongo.initDB((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log('DB is listening and API started on: ' + port);
    });
  }
});
