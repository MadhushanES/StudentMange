// method to mysql

const db = require('../config/db')

const Database = (req,res)=>{
    const {name,id} = req.body
    let file = "null"
    {req.files[0]? file = req.files[0].filename:file}

    // db.query('insert into student values(?,?)', [name,id])
    //     .then(()=> console.log('DB connected Succesfull'))
    //     .catch((err)=>{
    //     console.log('DB connection failed \n' + err))


    const sql = `insert into student values(?,?,?)`
    db.connection.query(sql, [name,id,file], (err,result)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log(result)
            res.send(result)
        }

    })


}

module.exports = Database



// const db = require('../config/db');
// const multer = require('multer');
// const express = require('express');
// const app = express();

// // Setup multer for file storage
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads/') // make sure this uploads directory exists
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop())
//     }
// });

// const upload = multer({ storage: storage });

// // Assuming you're using express
// // Update this endpoint to use the upload middleware. Adjust the fieldname according to your form data.
// app.post('/post/db', upload.single('file'), (req, res) => { // if 'file' is the name of your form field
//     const { name, id } = req.body; // Extracting text fields
//     const file = req.file; // Extracting file
    
//     // You can now use the file and other form data to interact with the database
//     const sql = `INSERT INTO student (name_column, id_column, file_column) VALUES (?, ?, ?)`;
//     const values = [name, id, file.path]; // assuming you want to save the file path in the database

//     db.connection.query(sql, values, (err, result) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).send('DB connection failed');
//         }
//         console.log('DB connected successfully');
//         res.send('Data inserted successfully');
//     });
// });

// // Make sure to export your router or app correctly if this is part of a larger application
// module.exports = app; // or whatever you need to export based on your app structure
