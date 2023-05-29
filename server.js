const express = require('express');
const app = express();
const port = 3000;
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('meuEvento', () => {
    console.log('Evento disparado! Tarefa executada.');
});

setInterval(() => {
    myEmitter.emit('meuEvento');
}, 5000);

app.listen(port, '127.0.0.1', () => {
    console.log('Servidor rodando em http://127.0.0.1:3000/');
});