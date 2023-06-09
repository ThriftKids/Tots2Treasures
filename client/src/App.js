import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignupForm from "./components/customs/SignupForm";
import LoginForm from "./components/customs/LoginForm";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from "./components/Cart/Cart";
import Inventory from "./components/Inventory/Inventory";
import Purchases from "./components/Purchases/Purchases";
import "./App.css";
import { StoreProvider } from "./utils/GlobalState";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Final from "./components/Final/Final";
import Error from "./components/404Error/404Error";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div>
      <ApolloProvider client={client}>
          <StoreProvider>
            <Header />
              <Routes>
                <Route path="/" element={<Dashboard />} />

                <Route path="/purchases" element={<Purchases />} />
                <Route path="/inventory" element={<Inventory />} />

                <Route path="/cart" element={<Cart />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/logout" element={<Navigate to="/"/>} />
                <Route path="/final" element={<Final transactionFailed={true} />}/>
                <Route path="*" element={<Error/>} />
              </Routes>
            <Footer />
          </StoreProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;