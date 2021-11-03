const express = require('express');
const app = express();
const dbc = require('./config');

app.use(express.json());

app.get('/', (req, res) => {
    dbc.query('SELECT * FROM users', (err, results)=>{
        err ? res.send("Error") : res.send(results);
    });
});

app.post('/', (req, res)=>{
    const data = req.body;
    dbc.query('INSERT INTO users SET ?', data, (error, results, fields) => {
        error ? error : '';
        msg = '';
        results.affectedRows > 0 ? msg = results.affectedRows+' New Records Saved Successfully and last InsertId: '+results.insertId : msg = 'Something Wrong';
        res.send(msg);
    });
});

app.listen(4545);
