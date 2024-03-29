import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'; /*após instalar chamo aqui a biblioteca */
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [  /*transactions é sempre o nome da model(linha 8) só que no plural */
        {
          id: 1,
          title: 'Freelance de Website',
          type: 'deposit',
          category: 'Dev',
          amount: 7782,
          createdAt: new Date('2023-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2023-02-15 10:30:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {  /*/transactions aqui pega somente apartir da API, nesse caso temos apenas o /transactions, GET--> BUSCANDO OS DADOS */
      return this.schema.all('transaction') /*me retorna todas as transações do banco de dados */
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


