import "./App.scss";
import Header from "./components/Header/Header";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Delivery from "./pages/Delivery/Delivery";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/how-to-order" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
