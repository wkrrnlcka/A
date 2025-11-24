const mongoose = require("mongoose");

const solveSchema = new mongoose.Schema({
    user: String,
    bojId: Number,
    title: String,
    difficulty: String,
    date: String,
    memo: String
});

module.exports = mongoose.model("Solve", solveSchema);
