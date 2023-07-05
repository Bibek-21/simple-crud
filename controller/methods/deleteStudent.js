"use strict";
(()=>{
  const delete_student = require("../sql/deleteStudents")
    module.exports = async(req, res, next) => {
        try {
            const output=await delete_student(req.params);
            if(output == true){
                
                res.status(200).send("delete Succesful");
    
            }
            else{
                res.status(400).send("deleted unsuccess");
            }
           
            
        } catch (error) {
            console.log(error)
           // res.status(400).send("delete unsuccesful")
        }
    }   
})()