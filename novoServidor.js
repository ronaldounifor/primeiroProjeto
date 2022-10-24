var express = require("express");
var fs = require("fs");
var app = express();

var html = fs.readFileSync("index.html");

app.get("/", function(request, response ){
    response.end(html);
});

app.get("/login", function(request, response ){
    let nome = request.query.nome;
    let sobrenome = request.query.sobrenome;
    if(nome == undefined) {
        response.end("Seja bem-vindo(a) amigo(a)!");
    } else {
        response.end("Seja bem-vindo(a) " + sobrenome + ", " + nome + "!");
    }
});

app.listen(8888, function(erro){
    if(erro) {
        console.log(erro);
    } else {
        console.log("Servidor está on....");
    }
});