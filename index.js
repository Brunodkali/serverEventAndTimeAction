const express = require('express');
const cron = require('node-cron');
const app = express();
const port = 3000;

const tarefa = () => {
  console.log('Tarefa executada!');
};

cron.schedule('* * * * *', tarefa);

app.listen(port, () => {
  console.log(`Servidor rodando`);
});