var calculadora = require("./calculadora");
var http = require("http");
var promptSync = require("prompt-sync");
var prompt = promptSync();

var prova1 = parseInt(prompt("Digite a nota da prova 1: "));
var prova2 = parseInt(prompt("Digite a nota da prova 2: "));

var somaAV1 = calculadora.soma(prova1, prova2);
var AV1 = calculadora.divisao(somaAV1, 2);