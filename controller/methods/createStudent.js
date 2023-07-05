"use strict";
(()=>{
    const create_student = require('../sql/createStudents');
  
    module.exports = async(req, res, next) => {
        try {
            const requestObject = {
                firstName: req.body.firstName,
                 lastName: req.body.lastName,
                 age: req.body.age,
                 email: req.body.email,
              };
              const output =await create_student(requestObject);
              if(output==true){

                res.status(201).send({
                    success:true,
                    message:"created Succesfully"
                })
            }else{
                res.status(400).send({
                    
                    success:false,
                    message: 'Could not create Succesfully'
                })
            }
        } catch (error) {
            res.status(500).send({
                success: false,
              
                message:'Internal Error',
                error
            });
             
        }
       
    }
})()