//database connectioin for mysql

// const mysql = require('mysql')

// const Conection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : 'root123',
//     database : 'student-db'
// })

// Conection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + connection.threadId);
//   });

// module.exports = new Conection

const mysql = require('mysql')

class Database {
    constructor(){
        this.connection = mysql.createConnection({
                host : 'localhost',
                user : 'root',
                password : 'root123',
                database : 'student-db'
            })

    }

    connect(){
        this.connection.connect(function(err) {
                if (err) {
                  console.error('error connecting: ' + err.stack);
                  return;
                }
               
                console.log('database connected');
              });

    }
}

module.exports = new Database