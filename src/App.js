import Products from './Components/Products';
import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import Cart from './Components/Cart';
import { CartProvider } from './provider/CartProvider';
import { Checkout } from './pages/Checkout';


function App() {

  return (
    <HashRouter>
      <CartProvider>
        <Routes>
          <Route exact path='/' element={<Products />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </CartProvider>
    </HashRouter>
  );
}

export default App;
