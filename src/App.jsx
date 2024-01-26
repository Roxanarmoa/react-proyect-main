import NavBar from "./components/NavBar/NavBar";
import Inicio from "./components/Inicio/Inicio";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./components/carrito/Carrito";
import Checkout from "./components/checkout/Checkout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import './App.css'




function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <div id="app">
          <NavBar/>
        </div>
        <Routes>
          <Route path="/" element= {<Inicio/>}/>
          <Route path ="/categoria/:detalles" element={<ItemListContainer/>}/>
          <Route path="/categorias/:categoria" element={<ItemListContainer/>}/>
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </CartProvider>  
    </BrowserRouter>
  )
}

export default App;
