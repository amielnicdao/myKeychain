
//add update and delete functions for passwords

var express = require("express");
var path = require("path");

var router = express.Router();

var pwd = require("../models/post");

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/display", function(req, res){
    pwd.all(function(data) {
    res.json({ users: data });
});
});

router.get("/signup", function(req, res){
    res.sendFile(path.join(__dirname, "../public/signup.html"));
});


router.post("/signup", function(req, res){
    pwd.create([
        "name", "password"
    ], [
        req.body.name, req.body.password
    ], function(result) {
        res.json({ id: result.insertId});
    });
    // console.log(req.body)
});

router.get("/dashboard", function(req, res){
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
});

router.get("/displayAccounts", function(req, res){
    pwd.allAcc(function(data) {
        res.json({ passwords: data });
    });
});

router.get("/displayOne", function(req, res){
    pwd.displayOne(req.query.id, function (data) {
        res.json({passwords: data})
    });
});

module.exports = router;



