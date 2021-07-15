import React,{useState} from 'react';
import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client';
import './App.css';
import Create_User from './components/createUser';

function App() {

  const  client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache:new InMemoryCache()
  });
  
  return (
      <ApolloProvider client={client}>
         <Create_User/>
      </ApolloProvider>
    );
}

export default App;
