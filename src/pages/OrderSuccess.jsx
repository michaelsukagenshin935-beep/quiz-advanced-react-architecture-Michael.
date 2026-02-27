import "./OrderSuccess.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function OrderSuccess() {
  const navigate = useNavigate();
  const { state } = useContext(GlobalContext);

  const lastOrder = state.orders[state.orders.length - 1];

  if (!lastOrder) {
    return (
      <div className="order-success">
        <h1>No Order Found</h1>
        <button
          className="success-btn"
          onClick={() => navigate("/products")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="order-success">
      <div className="success-icon">✓</div>

      <h1>Order Confirmed!</h1>
      <p>Your order has been placed successfully.</p>

      <div className="success-box">
        <div>
          <span>ITEMS</span>
          <h3>{lastOrder.totalItems}</h3>
        </div>

        <div>
          <span>TOTAL PAID</span>
          <h3 className="success-price">
            ${lastOrder.totalPrice.toFixed(2)}
          </h3>
        </div>

        <div>
          <span>STATUS</span>
          <h3 className="success-status">Processing</h3>
        </div>
      </div>

      <button
        className="success-btn"
        onClick={() => navigate("/products")}
      >
        Continue Shopping →
      </button>
    </div>
  );
}

export default OrderSuccess;