const mongoose = require ("mongoose");

mongoose.connect("mongodb+scr://michele:96243840@michele.mongodb.net/delas");

let db = mongoose.connection;
module.exports = db