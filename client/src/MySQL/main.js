const express = require("express");
const mysqul = require("mysql");

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123"
})

con.connect(function(err){
    if(err){
        console.log(err)
    } else{
        console.log("connected")
    }
})