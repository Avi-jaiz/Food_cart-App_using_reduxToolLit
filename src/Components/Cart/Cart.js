import { useSelector } from 'react-redux';
import '../Cart/cart.css';

import CartItem from './CartItem';


const Cart = (props) => {
  
  const cartItems = useSelector((state=>state.cart.items))





  return(
  <div className="cart">
    <div className="cart_Head">
      <h2>Your Shopping Cart</h2>
    </div>
  <ul>

    {cartItems.map((item)=>
    {
      return(
<CartItem  key ={item.id}
items ={
  {
    id:item.id,
    title:item.name,
    price:item.price,
    total:item.total,
    quantity:item.quantity,
   

  }
} 
  />
      )
    })}



  </ul>

 
     
        
       
  </div>
  )
};

export default Cart;
