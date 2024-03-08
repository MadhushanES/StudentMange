const db = require('../config/db')

//get all students
const Getall = (req,res)=>{
  
    const sql = `select * from student`
    db.connection.query(sql, (err,rows, fields)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log(rows)
            res.send(rows)
        }

    })


}

//get an student
const Getone = (req,res)=>{

    db.connection.query(`select * from student where id = ?`, [req.params.id],(err,rows, fields)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log(rows)
            res.send(rows)
        }

    })
}





module.exports = {Getall,Getone}