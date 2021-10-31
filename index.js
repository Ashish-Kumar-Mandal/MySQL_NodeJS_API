const mysql = require('mysql');

const dbc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'node_mysql'
});

dbc.connect((err)=>{
    err ? console.log("Connection Failed") : console.log('Connection Successful');
});

dbc.query('SELECT * FROM users', (err, results)=>{
    console.log("Result: ", results);
})