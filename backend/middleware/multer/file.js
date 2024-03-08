// multer config

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/') // make sure this uploads directory exists
    },
    filename: function(req, file, cb) {
        const {name, id} = req.body
        console.log(req.body)

        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop())
    }
});

const upload = multer({ storage: storage })

//multer config

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function(req, file, cb) {
//         //const { name, id } = req.body;

//         // Check if name and id are provided in the request body
//         // if (!name || !id) {
//         //     return cb(new Error('Name and id are required'));
//         // }

//         // Extract the file extension
//         const fileExtension = file.originalname.split('.').pop();

//         // Generate the new filename using the provided name, id, and current timestamp
//         const filename = `${file.firldname}_${Date.now()}.${fileExtension}`;

//         // Pass the new filename to the callback
//         cb(null, filename);
//     }
// });

// const upload = multer({storage:storage})

module.exports = upload;