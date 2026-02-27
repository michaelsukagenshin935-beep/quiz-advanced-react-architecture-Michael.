import "./OrderSuccess.css";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="order-success">
      <div className="success-icon">✓</div>

      <h1>Order Confirmed!</h1>
      <p>Your order has been placed successfully.</p>

      <div className="success-box">
        <div>
          <span>ITEMS</span>
          <h3>3</h3>
        </div>

        <div>
          <span>TOTAL PAID</span>
          <h3 className="success-price">$329.98</h3>
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