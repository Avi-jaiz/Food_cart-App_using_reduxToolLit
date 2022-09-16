import '../Components/header.css';
import CartButton from '../Components/Cart/CartButton'
import Cart from './Cart/Cart';

const Header =()=>
{
  return(
    <div className="header">
<h3>Redux Cart</h3>

<CartButton />


    </div>
  )
}

export default Header;