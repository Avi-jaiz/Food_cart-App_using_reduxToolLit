import { useDispatch } from 'react-redux'
import '../Cart/cartButton.css'
import { uiActions } from '../../Store/ui-slice'
const CartButton =(props)=>
{

 const dispatch = useDispatch()

const toggleCartHandler =()=>
{
        dispatch(uiActions.toggle())
}



     return(
        <button className="cartButton" onClick={toggleCartHandler}>
<span>My Cart</span>
<span className='badge'>15</span>
        </button>
     )
}

export default CartButton;