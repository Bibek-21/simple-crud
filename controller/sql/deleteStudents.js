"use strict";
(()=>{
    const helper = require("../../helper/index")
    module.exports = async(req, res, next) => {
       try {
        let sqlQuery = `Update students set is_delete =1 WHERE uuid='${req.uuid}'`; //flag ko concept 1 or 0
       let result = await helper.mysqlHelper.query(sqlQuery); 
       if(result[0].affectedRows>0)
       {
         return true;
        
       }
       } catch (error) {
        console.log(error)
       }
       
    };
})()