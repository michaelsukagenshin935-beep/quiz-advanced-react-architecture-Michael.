import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Products />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Checkout />
                </>
              </ProtectedRoute>
            }
          />
            
          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <OrderSuccess />
                </>
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;