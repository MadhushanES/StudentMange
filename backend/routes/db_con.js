const express = require('express')

const Db = require('../controller/Student')
const Meth = require('../controller/studentDetails')
const Updt = require('../controller/student_update')
const Delt = require('../controller/student_remove')
const Dbb = require('../controller/_student')
const upload = require('../middleware/multer/file')

const router = express.Router()

router.post('/dbb',upload.array('file'), Dbb)
router.post('/db',upload.array('file'), Db)
router.get('/students', Meth.Getall)
router.get('/student/:id', Meth.Getone)
router.delete('/remove/:id', Delt)
router.put('/update/:id', Updt)
// router.post('/add',upload.array('file'), AddCategory);
module.exports = router