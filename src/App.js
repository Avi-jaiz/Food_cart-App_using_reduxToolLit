import { useSelector } from 'react-redux';
import './App.css'
import Cart from './Components/Cart/Cart';
import CartItem from './Components/Cart/CartItem';
import Header from './Components/Header';
import Products from './Components/Shop/Products';

function App() {

const cartisVisible =  useSelector(state=>state.ui.cartIsVisible)

console.log(cartisVisible)

  return (
    <div className="App">
     <Header/>

{cartisVisible && <Cart />}
<Products />
     
     <CartItem />
    </div>
  );
}

export default App;
