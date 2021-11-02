const mysql = require('mysql');

const dbc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_mysql'
});

// dbc.connect((err)=>{
//     err ? console.log("Connection Failed") : console.log('Connection Successful');
// });

module.exports = dbc;