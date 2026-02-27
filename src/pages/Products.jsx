import "./Products.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import {
  FaHeadphones,
  FaKeyboard,
  FaClock,
  FaLightbulb,
  FaCamera,
  FaVolumeUp,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Obsidian Wireless Headphones",
    price: 129.99,
    tag: "BESTSELLER",
    icon: <FaHeadphones />,
  },
  {
    id: 2,
    name: "Phoenix Mechanical Keyboard",
    price: 199.99,
    tag: "NEW",
    icon: <FaKeyboard />,
  },
  {
    id: 3,
    name: "Eclipse Smart Watch",
    price: 349.99,
    tag: "PREMIUM",
    icon: <FaClock />,
  },
  {
    id: 4,
    name: "Nova Desk Lamp",
    price: 89.99,
    tag: "POPULAR",
    icon: <FaLightbulb />,
  },
  {
    id: 5,
    name: "Aura Webcam 4K",
    price: 159.99,
    tag: "TOP PICK",
    icon: <FaCamera />,
  },
  {
    id: 6,
    name: "Zen Portable Speaker",
    price: 74.99,
    tag: "SALE",
    icon: <FaVolumeUp />,
  },
];

export default function Products() {
  const { dispatch } = useContext(GlobalContext);

  return (
    <div className="products-page">
      <p className="collection-label">OUR COLLECTION</p>
      <h1 className="title">Featured Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <span className="tag">{product.tag}</span>
              <div className="image-placeholder">
                {product.icon}
              </div>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>

              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  })
                }
              >
                Add to Cart
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}