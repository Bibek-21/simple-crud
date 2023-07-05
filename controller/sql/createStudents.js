"use strict";
const { response } = require("express");
const helper = require("../../helper/index");
(()=>{
   module.exports=async(call)=>{
            try {
              
                let myDate = new Date().getTime(); //epoch value
                const { v4: uuidv4 } = require('uuid'); //super key
                
                const output = await helper.mysqlHelper.query(`INSERT INTO students (uuid,firstName,lastName,age,email,createdAt) VALUES ('${uuidv4()}','${call.firstName }','${call.lastName}','${call.age}','${call.email}',${myDate})`);
                if(output[0].affectedRows>0){
                     return true
                 }
                 else{
                     return false
                 }          
            } catch (error) {
              
                console.log(error);
            }
      
    }
})()