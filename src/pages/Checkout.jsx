import "./Checkout.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import {
  FaHeadphones,
  FaKeyboard,
  FaClock,
  FaLightbulb,
  FaCamera,
  FaVolumeUp,
  FaShoppingCart,
} from "react-icons/fa";

export default function Checkout() {
  const { state, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleOrder = () => {
    dispatch({ type: "CLEAR_CART" });
    navigate("/products");
  };

  return (
    <div className={`checkout-page ${state.cart.length === 0 ? "empty-mode" : ""}`}>
      {state.cart.length === 0 ? (
        /* ================= EMPTY STATE ================= */
        <div className="empty-cart-wrapper">
          <p className="checkout-label">CHECKOUT</p>
          <h1>Your Cart</h1>

          <div className="empty-cart">
            <FaShoppingCart className="empty-icon" />
            <h3>Your cart is empty</h3>
            <p>Add some products before checking out.</p>
          </div>
        </div>
      ) : (
        /* ================= NORMAL CHECKOUT ================= */
        <>
          <div className="checkout-left">
            <p className="checkout-label">CHECKOUT</p>
            <h1>Your Cart</h1>
            <p className="item-count">
              {state.totalItems} items ready for purchase
            </p>

            {state.cart.map((item) => (
              <div key={item.id} className="cart-card">
                <div className="cart-info">
                  <div className="cart-icon">
                    {item.name.includes("Headphone") && <FaHeadphones />}
                    {item.name.includes("Keyboard") && <FaKeyboard />}
                    {item.name.includes("Watch") && <FaClock />}
                    {item.name.includes("Lamp") && <FaLightbulb />}
                    {item.name.toLowerCase().includes("webcam") && (
                      <FaCamera />
                    )}
                    {item.name.includes("Speaker") && <FaVolumeUp />}
                  </div>

                  <div>
                    <h4>{item.name}</h4>
                    <p>
                      Qty: {item.quantity} × ${item.price}
                    </p>
                  </div>
                </div>

                <div className="price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-right">
            <h3>Order Summary</h3>

            {state.cart.map((item) => (
              <div key={item.id} className="summary-row">
                <span>
                  {item.name} ×{item.quantity}
                </span>
                <span>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="total">
              Total ${state.totalPrice.toFixed(2)}
            </div>

            <button
              className="order-btn"
              onClick={() => navigate("/success")}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}