const db = require('../config/db')

const Update =  (req,res)=>{

    const upid = req.params.id
    const name = req.body.name
    const id = req.body.id

    db.connection.query('UPDATE student SET name = ? , id = ? WHERE id=?', [name,id,upid], (err,result)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log("Updated!")
            res.send('Updated Successfull!')
        }
    })
}

module.exports = Update