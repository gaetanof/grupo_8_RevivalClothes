import React from 'react';
import ContentWrapper from './components/ContentWrapper';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products'
import Users from './components/Users'

function App() {
  return (
    <BrowserRouter>
      <main id="wrapper">
        <Routes>
          <Route index element={<ContentWrapper />} />
          <Route path='products' element={<Products />} />
          <Route path='users' element={<Users />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
