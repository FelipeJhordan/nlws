// server
const express = require("express");
const server = express();

//configurar nunjucks ( template _)
const nunjucks = require("nunjucks");
nunjucks.configure('src/views', {
    express: server,
    noCache:true
});

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses
} = require('./pages');

//configurar arquivos estáticos e configurar para receber dados do body
server
.use(express.static("public"))
.use(express.urlencoded({ extended: true}))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500);

