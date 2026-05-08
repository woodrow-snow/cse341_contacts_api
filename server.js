// =============================
// = Required Statements
// =============================
const express = require('express');


// creating app
const app = express();

// =============================
// = Middleware
// =============================

// =============================
// = Routes
// =============================
app.use('/', require('./routes'));

// =============================
// = Local Server Info
// =============================
const port = process.env.PORT || 5500;

// =============================
// = Log statement to conffirm server operation
// =============================
app.listen(port, () => {
    console.log('API started on: ' + port);
});