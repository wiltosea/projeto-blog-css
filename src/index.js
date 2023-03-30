import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    // Replace this with your own read-only API token:
    Authorization: 'Bearer a6619e22f88ae0d7455438c4b9e13c',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>,
);
