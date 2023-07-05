"use strict";
(() => {
    const find_student = require("../sql/findStudents");
    module.exports = async (req, res, next) => {
        try {

            const output = await find_student();
            console.log(output);
            if (output) {
                res.send(output);
                // res.status(200).send('Succesfully found data');
            }
            else
                res.status(400).send('Could not find data');
        } catch (error) {
            console.log(error);

        }


    }

})();