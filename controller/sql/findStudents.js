"use strict";
(() => {
    const helper = require("../../helper/index")
    module.exports = async () => {

        try {
            let sqlquery = `select * from  students where is_delete=0 `;
            let [result] = await helper.mysqlHelper.query(sqlquery);
            return result;
        }

        catch (error) {

            console.log(error);

        }

    };

})();