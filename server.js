//importação e instanciação do express
import express from 'express';
const app = express();

//para rodar .ejs
app.set("view engine", "ejs");

//função para renderizar páginas
app.get("/", function(req, res){
    res.render("pages/index");
})
app.get("/site", function(req, res){
    res.render("pages/site");
})
app.get("/video", function(req, res){
    res.render("pages/video");
})
app.get("/ebook", function(req, res){
    res.render("pages/ebook");
})
app.get("/article", function(req, res){
    res.render("pages/article");
})
app.get("/academics", function(req, res){
    res.render("pages/academics");
})

//acessar elementos estáticos (css e js) no dir. public
app.use(express.static('public'));

app.listen(8080);
console.log('rodando');