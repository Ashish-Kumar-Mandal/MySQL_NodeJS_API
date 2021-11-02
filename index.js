const express = require('express');
const app = express();
const dbc = require('./config');

app.get('/', (req, res) => {
    dbc.query('SELECT * FROM users', (err, results)=>{
        err ? res.send("Error") : res.send(results);
    });
});

app.listen(4545);
