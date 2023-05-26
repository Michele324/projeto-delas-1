const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://adimin:96243840@cluster0.mpo2o9j.mongodb.net/delas");

let db = mongoose.connection;

module.exports = db