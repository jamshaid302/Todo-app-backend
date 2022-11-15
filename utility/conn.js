require('dotenv').config();
const mongoose = require("mongoose");

// mongoose.connect(process.env.DB_URI.mongodatabaseConnection,{ useNewUrlParser: true,useUnifiedTopology: true});

    if(process.env.NODE_ENV == 'development'){
        mongoose.connect(process.env.DB_URI);
        const { connection } = mongoose;
        connection.once("connected", () => console.log("Database Connected ~"))
        connection.on("error", error => console.log("Database Error: ", error))
    }
    // else {
    //     // mongoose.connect(`mongodb+srv://jamshaid:jamshaid@cluster0.aycmrpn.mongodb.net/test_userListing`);
    //     mongoose.connect(process.env.TEST_DB_URI);
    //     const { connection } = mongoose;
    //     connection.once("connected", () => console.log("Test Database Connected ~"))
    //     connection.on("error", error => console.log("Database Error: ", error))
    // }
