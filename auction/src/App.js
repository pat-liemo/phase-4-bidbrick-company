import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './layout/Layout';
import Form from './pages/Form';
import ViewProperty from './pages/ViewProperty';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="property/:id" element={<ViewProperty />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
