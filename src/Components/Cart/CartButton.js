import { useDispatch , useSelector } from 'react-redux'
import '../Cart/cartButton.css'
import { uiActions } from '../../Store/ui-slice';




const CartButton =(props)=>
{
const cartQuantity=useSelector(state=>state.cart.totalQuantity)




 const dispatch = useDispatch()

const toggleCartHandler =()=>
{
        dispatch(uiActions.toggle())
}



     return(
        <button className="cartButton" onClick={toggleCartHandler}>
<span>My Cart</span>
<span className='badge'>{cartQuantity}</span>
        </button>
     )
}

export default CartButton;