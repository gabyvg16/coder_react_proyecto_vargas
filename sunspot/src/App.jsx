import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import Cart from './pages/Cart/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">        
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
    </div>
  );
}

export default App;
