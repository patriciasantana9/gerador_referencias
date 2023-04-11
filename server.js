import express from 'express';

const app = express();

app.set("view engine", "ejs");

app.get("/", function(res, res){
    res.render("index");
})
