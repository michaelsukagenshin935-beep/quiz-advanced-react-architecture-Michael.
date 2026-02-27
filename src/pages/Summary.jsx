import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Summary() {
  const { state } = useContext(GlobalContext);

  return (
    <div>
      <h2>Thank You For Your Order!</h2>
      <p>User: {state.user}</p>
      <p>Total Items Purchased: {state.totalItems}</p>
      <p>Total Price: ${state.totalPrice}</p>
    </div>
  );
}