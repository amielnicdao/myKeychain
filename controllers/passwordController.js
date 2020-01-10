
//add update and delete functions for passwords

var express = require("express");
var path = require("path");

var router = express.Router();

var pwd = require("../models/post");

var saveId;

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
    saveId = req.query.id //added
    module.exports.id = saveId; //added
    pwd.displayOne(req.query.id, function (data) {
        res.json({passwords: data})
    });
});

router.post("/dashboard", function(req, res){//added
    pwd.createNewAcc([
        "name", "type", "password"
    ], [
        req.body.name, req.body.type, req.body.password
    ],saveId, function(result) {
        res.json({ id: result.insertId});
    });
    // console.log(req.body)
});

router.put("/dashboard/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("controller");
    pwd.update({
        user_name: req.body.user_name,
        password: req.body.password
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.json({id: req.params.id});
        }
    });
});

router.delete("/dashboard/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("controller");

    pwd.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;





