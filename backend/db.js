//database connection and post method for mysql2
const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'root123',
    database : 'student-db'
})

// mysqlPool.query('SELECT 1')
//     .then(()=> console.log('DB connected Succesfull'))
//     .catch((err)=>{
//         console.log('DB connection failed \n' + err)
//     })

const Database = (req,res)=>{
    const name = req.body.name;
    const id = req.body.id;

    mysqlPool.query('insert into student values(?,?)', [name,id],
    (err,res)=>{
        if(err){
            console.log(err)
        } else{
            res.send('update successfully')
            console.log('nbdhad')
        }
    }
    )


}

module.exports = Database