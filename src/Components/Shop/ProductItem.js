import { cartActions } from '../../Store/cart-slice';
import { useDispatch } from 'react-redux';
import '../Shop/productItem.css';

const ProductItem =(props)=>
{
   const dispatch = useDispatch()
   const {id,price,description,title}  = props
 
   const addToCartHandler  =()=>
   {
           dispatch(cartActions.addItemToCart(
            {
               id,price,description,title,
            }
           ));
         
   }

   return (
<div className="productItem">
<h3>{props.title}</h3>
<div className="productItemPrice">
  Rs <strong>{props.price}</strong>

</div>
<p>{props.description}</p>
<div className="productItemButton">
   <button onClick={addToCartHandler}> Add to Cart</button>

</div>



</div>
   )
}

export default ProductItem;