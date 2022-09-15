import '../UI/cartButton.css';

const CartButton =()=>
{
     return(
        <button className="cartButton">
<span>My Cart</span>
<span className='badge'>15</span>
        </button>
     )
}

export default CartButton;