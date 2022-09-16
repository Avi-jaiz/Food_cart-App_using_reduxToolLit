import '../Cart/cart.css';

const Cart = () => {
  return(
  <div className="cart">
    <div className="cart_Head">
      <h2>Your Shopping Cart</h2>
    </div>
    <div className="cartBody">
      <div className="cartHead">
     <h2>Test Item</h2>
        <h3>Rs. 240.00 <span>(Rs. 120/ item)</span></h3> 
      </div>

      <div className="cartdetails">
     <h2>x3</h2>
        <div className='cartBtn'>
          <button className='BtnChild'>-</button>
          <button className='BtnChild'>+</button>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Cart;
