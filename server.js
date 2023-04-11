import express from 'express';

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("pages/index");
})
app.get("/site", function(req, res){
    res.render("pages/site");
})
/*
app.get("/livro", function(req, res){
    res.render("pages/livro");
})
app.get("/video", function(req, res){
    res.render("pages/video");
})
app.get("/artigo", function(req, res){
    res.render("pages/artigo");
})
app.get("/trabalhos", function(req, res){
    res.render("pages/trabalhos");
})
*/
app.listen(8080);
console.log('rodando');