(() => {
    const express = require("express");
    const router = express.Router();
    const studentRoute = require("../route/studentRoute");

    router.use("/student", studentRoute);
    
    module.exports = router;
})()
