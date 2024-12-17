import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Regester';
import SignIn from './components/Sign-In';
import Main from './components/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path="/Regester" element={<Form />} />
      <Route path="/Sign-In" element={<SignIn />} />
    </Routes>
  );
}

export default App;
