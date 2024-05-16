import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components

import Login from './components/auth/login';
import Register from './components/auth/register';
import Header from './components/header';
import Home from './components/home';

import { AuthProvider } from './contexts/authContext';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
