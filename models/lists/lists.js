const mongoose = require("mongoose");
let ListsSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model("lists",ListsSchema);
