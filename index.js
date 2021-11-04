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

app.put('/:_id', (req, res)=>{
    const body = req.body;
    const data = [body.name, body.mobile, body.email, body.password, req.params._id];
    dbc.query('UPDATE users SET name=?, mobile=?, email=?, password=? WHERE usr_id=? ', data, (error, results, fields) => {
        error ? error : '';
        msg = '';
        results.affectedRows > 0 ? msg = results.affectedRows+' Records Updated Successfully' : msg = 'Something Wrong';
        res.send(msg);
    });
});

app.listen(4545);
