import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem"
import "./Cart.scss";
const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {/* <div className="empty-cart">
            <BsCartX />
            <span>The is no products in the cart.</span>
            <button className="return-to-shop">RETURN TO SHOP</button>
        </div> */}

        <>
            <CartItem />
            <div className="cart-footer">
                <div className="sumtotal">
                    <span className="text">Sumtotal:</span>
                    <span className="text total">&#8380;500</span>
                </div>
                <div className="button">
                    <button className="chekout-btn">Checkout</button>
                </div>
            </div>
        </>

      </div>
    </div>
  );
};

export default Cart;
