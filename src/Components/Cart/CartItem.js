import { useDispatch } from 'react-redux';
import '../Cart/cartItem.css';
import { cartActions } from '../../Store/cart-slice';

const CartItem =(props)=>
{
    
const dispatch =   useDispatch()

const {id,price,title,quantity ,total } = props.items;

console.log(props)


const removeItemHandler =()=>
{
    dispatch(cartActions.removeItemFromItem(id))
}
const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id:id,
        title:title,
        price:price,
        quantity:quantity
       
      })
    );
  };

    return(
       
       
       <>
<li className="cartItem">
    <div className="cartItemHead">
        <h3 >{title}</h3>

        <div className="cartItemTotalPrice">
            <h2>{quantity*price}</h2>
        </div>

    </div>

    <div className="cartItemDescription">
      Quantity :  {quantity}

    </div>
    <div className='btn'>
        
    <button className='cartItemBtn' onClick={addItemHandler} >Add to Cart</button>
    <button className='cartItemBtn' onClick={removeItemHandler}>Remove from Cart</button>
    </div>




</li>
    



</>
    )
}

export default CartItem;