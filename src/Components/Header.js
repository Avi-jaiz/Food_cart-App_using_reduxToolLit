import CartButton from "../UI/CartButton";
import '../Components/header.css';
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