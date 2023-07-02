const mongoose = require("mongoose");

require("dotenv").config();

const dbConnent = () =>{
    mongoose.connect(process.env.DATA_BASE_URL , {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then( () =>(
        console.log("connection is successful")
    ))
    .catch((error) =>{
        console.log("issue in CB connection");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnent;
