export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        cart: [],
        totalItems: 0,
        totalPrice: 0,
        orders: [],
      };

    case "ADD_TO_CART":
      const existing = state.cart.find(
        (item) => item.id === action.payload.id
      );

      let updatedCart;

      if (existing) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        cart: updatedCart,
        totalItems: updatedCart.reduce(
          (sum, item) => sum + item.quantity,
          0
        ),
        totalPrice: updatedCart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };

    case "REMOVE_FROM_CART":
      const filtered = state.cart.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        cart: filtered,
        totalItems: filtered.reduce(
          (sum, item) => sum + item.quantity,
          0
        ),
        totalPrice: filtered.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };

    case "PLACE_ORDER":
      const newOrder = {
        items: state.cart,
        totalItems: state.totalItems,
        totalPrice: state.totalPrice,
        date: new Date().toISOString(),
      };

      return {
        ...state,
        orders: [...state.orders, newOrder],
        cart: [],
        totalItems: 0,
        totalPrice: 0,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        totalItems: 0,
        totalPrice: 0,
      };

    default:
      return state;
  }
};