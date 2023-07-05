
(()=>{
    const express = require("express");
    const router = express.Router();
    const create_student = require("../controller/methods/createStudent")
    const update_student= require("../controller/methods/updateStudent");
    const delete_student= require("../controller/methods/deleteStudents");


    router.post('/createStudent',create_student);
    // router.put('/updateStudent',update_student);
    router.put('/updateStudent/:uuid',update_student);
    router.delete('/deleteStudent/:uuid',delete_student);


    module.exports = router;
})()

