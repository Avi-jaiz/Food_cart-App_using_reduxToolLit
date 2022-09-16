import '../Cart/cartItem.css'

const CartItem =()=>
{


    return(
        <>



    
<div className="cartItem">
    <div className="cartItemHead">
        <h3>Test</h3>

        <div className="cartItemTotalPrice">
            <h2>Rs 240.00</h2>
        </div>

    </div>

    <div className="cartItemDescription">
        The test describes the Item Present in the Cart.

    </div>

    <button className='cartItemBtn'>Add to Cart</button>



</div>
    



</>
    )
}

export default CartItem;