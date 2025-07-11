import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/Layout/NavBar/NavBar";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import ContactForm from "./components/Layout/ContactForm/ContactForm";

import ItemListContainer from "./components/products/ItemListContainer/ItemListContainer";
import ProductDetail from "./components/products/ProductDetail/ProductDetail";

import Search from "./components/ui/Search/Search";
import NotFound from "./components/ui/NotFound/NotFound";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/Layout/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="layout">
        <Sidebar />
        <div className="contenido">
          <Search />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/detalle/:id" element={<ProductDetail />} />
            <Route path="/contacto" element={<ContactForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
