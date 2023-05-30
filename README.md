## Cron server and Event server

Nesse repositório existem dois exemplos de servidores, um Cron Job e um Event Server.

### Definições resumidas:

> Um Cron Job funciona como um agendamento de tarefas, onde a cada ciclo de tempo pré-definido uma tarefa é disparada, automatizando assim a realização de tarefas pré-existentes.

> Um Event Server (Servidor de eventos) funciona coletando eventos disparados e realizando tarefas pré-definidas para cada evento, ou seja, ele capta eventos disparados, cria uma entrada para cada evento e responde ao evento automaticamente, seguindo o escopo do conjunto de regras pré-definidas.

O arquivo "index.js" possui um exemplo básico de um Cron Job, enquanto o arquivo "server.js" possui um exemplo simples de um Event Server.

OBS: Leia os arquivo "package.json" para ver a execução de cada servidor e lembre de instalar as dependências.
