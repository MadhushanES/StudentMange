// const db = require('../config/db')
// const multer = require('multer')
// const fs = require('fs')
// const path = require()

// const storage = multer.diskStorage({
//     destination: function(req,res,cb){
//         cb(null, 'uploads/')  // upload directory
//     },
//     filename: function(req, file, cb){
//         cb(null, file.fieldname+'_'+ Date.now() + '.'+file.originalname.split('.').pop()) 
//     }
// })

// const upload = multer({storage: storage})



// const Database = (req, res)=>{
//     const fs = require('fs');
// const path = require('path');

// // Inside your route or controller, before the database insertion
// if (req.file) {
//     const fileContent = fs.readFileSync(path.resolve(req.file.path));
//     // Now, `fileContent` contains the binary data of your file, which you can insert into the database
    
//     // Your database query execution might look something like this:
//     const sql = `INSERT INTO student (name_column, id_column, file_column) VALUES (?, ?, ?)`;
//     const values = [name, id, fileContent]; // Using binary data instead of file path
    
//     db.connection.query(sql, values, (err, result) => {
//         if (err) {
//             // handle error
//             console.log(err);
//             return res.status(500).send('Error inserting file into database');
//         }
//         // Success handling
//         res.send('File stored in database successfully');
//     });
// } else {
//     // Handle the case where no file was uploaded
// }


//     const {name, id} = req.body
//     const file = req.file

//     const sql = `INSERT INTO student VALUES (?,?,?)`
//     const values = [name,id,file.] 
// }
const db = require('../config/db')
const fs = require('fs')
//const upload = require('../middleware/multer/file')

const AddStudent = (req,res)=>{
    const {name, id} = req.body // extract text fields
    let file = "null"
    {req.files[0]? file = req.files[0].filename:file} //extract file

    const sql = `INSERT INTO student VALUES(?,?,?)`
    const values = [name,id,file]

    const splitlist =file.split('.')    
    const extention = splitlist[splitlist.length-1]
    console.log(file)

    fs.rename(`./uploads/${file}`, `./uploads/${id}_${name}_${Date.now()}.${extention}`, function(err) {
        if ( err ){
            console.log('ERROR: ' + err)
        }else{
            db.connection.query(sql,values, (err,result)=>{
                if(err){
                    console.log(err)
                    res.send(err)
                }else{
                    console.log('Student added Successfully!')
                    res.send('add successfull! \n' + result)
                }
            })

    }
    
});

    // db.connection.query(sql,values, (err,result)=>{
    //     if(err){
    //         console.log(err)
    //         res.send(err)
    //     }else{
    //         console.log('Student added Successfully!')
    //         res.send('add successfull! \n' + result)
    //     }
    // })

}

module.exports = AddStudent