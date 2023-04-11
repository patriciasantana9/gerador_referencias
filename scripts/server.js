import express from 'express';

const app = express();

app.set("view engine", "ejs");

app.get("/", function(res, res){
    res.render("index");
})
app.get("/site", function(res, res){
    res.render("site");
})
app.get("/livro", function(res, res){
    res.render("livro");
})
app.get("/video", function(res, res){
    res.render("video");
})
app.get("/artigo", function(res, res){
    res.render("artigo");
})
app.get("/trabalhos", function(res, res){
    res.render("trabalhos");
})
