const db = require('../config/db')

//Delete Student

const Name = (req,res)=>{
    db.connection.query(`delete from student where id=?`, [req.params.id], (err)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log('Deleted Successfully')
            res.send('Deleted successfully')
        }
    })
}

module.exports = Name