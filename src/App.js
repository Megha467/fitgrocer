import './App.css';
import Navbar from './app/layouts/Navbar';
import Home from './app/UI/Home';
import Product from './app/UI/Product';
import Cart from './app/UI/Cart';
import Checkout from './app/UI/Checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route  exact path = "/" Component={Home } />
      <Route path ='/products/:id' Component={Product} />
      <Route exact path="/cart/:id" Component={Cart} />
      <Route path ='/checkout' Component={Checkout} />
      </Routes>
      </div>
  );
}

export default App;
