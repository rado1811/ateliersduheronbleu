const mysql = require('mysql');

const connection = mysql.createConnection({
  multipleStatements: true,
  host: 'sql7.freemysqlhosting.net',
  user: 'sql7239441',
  password: 'lI1KZJjzVK',
<<<<<<< HEAD
  database: 'sql7239441'
});

connection.connect((err) => {
=======
  database: 'sql7239441',
});

connection.connect(function(err) {
>>>>>>> navBar
  if (!err) {
    console.log('Database connected');
  } else {
    console.log('No connection with database');
  }
});

module.exports = connection;
