"use strict";
(()=>{
    const update_student = require('../sql/updateStudents')
    module.exports = async(req, res, next) => {
        try {
            const obj ={
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                email: req.body.email,
                uuid: req.params.uuid
            }
                const output=await update_student(obj);
                if(output){
                    res.send("update Succesful");

                }else{
                    res.send("update UnSuccesful");
                 
                }
                     
        } catch (error) {
           res.status(400).send("Not  updated");
            // console.log(error);
            
        }
      
  };
})()