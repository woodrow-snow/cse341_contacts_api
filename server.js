// =============================
// = Required Statements
// =============================
const express = require('express');
const mongo = require('./data/database');

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

mongo.initDB((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {
            console.log('DB is listening and API started on: ' + port);
        });
    }
});

