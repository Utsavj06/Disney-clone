import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom"
import Detail from './components/Details';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Disney-clone" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/login" element={<Login />} />
    </Routes> 
    </div>
  );
}

export default App;
 