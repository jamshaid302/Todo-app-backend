const mongoose = require("mongoose");
let TodosSchema = new mongoose.Schema({
    list_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "lists",
    },
    title: String,
    marked: {
        type: Boolean,
        default: false
    },
    due_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("todos",TodosSchema);
