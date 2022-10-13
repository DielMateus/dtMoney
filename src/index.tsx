import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'; /*após instalar chamo aqui a biblioteca */
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {  /*/transactions aqui pega somente apartir da API, nesse caso temos apenas o /transactions, GET--> BUSCANDO OS DADOS */
      return [
        {
          // Dados fictícios
          id: 1,
          title: 'Transactions 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


