const mongoose = require('mongoose')
const express=require("express");


const userSchema = new mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    salary : {
        type : Number
    },
    department : {
        type : String
    },
    lastCompany : {
        type : String
    },
    lastSalary : {
        type : Number
    },
    overaallExp : {
        type : Number
    },
    contactInfo : {
        type : Number
    },
    yearGrad : {
        type : Number
    },
    gradStream : {
        type : String
    },

})

module.exports = mongoose.model("User", userSchema)

