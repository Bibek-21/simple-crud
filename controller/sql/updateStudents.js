"use strict";
(()=>{
    const helper = require("../../helper/index")
    const date  = new Date().getTime()
    module.exports = async(call) => {
       
      try {
        let sqlquery = `UPDATE students SET firstName='${call.firstName}',lastName='${call.lastName}',age='${call.age}',email='${call.email}',updatedAt='${date}' WHERE uuid='${call.uuid}'`; 
       let result = await helper.mysqlHelper.query(sqlquery); 

       if(result[0].affectedRows>0){
        return result
    }
    else{
        console.log("no rows affected");
        return false
        
    }
          
         } catch (error) {
            console.log(error);
            // res.status(400).send('Unsuccessfull updating table')
        
      } 
       
    };
})()