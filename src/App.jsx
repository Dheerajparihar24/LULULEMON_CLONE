import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WomenSection from "./pages/WomenSection";
import MenSection from "./pages/MenSection";
import Bags from "./pages/Bags";
import Accessories from "./pages/Accessories";
import Cart from "./pages/Cart";
// import { Header } from "./components/Navbar/Header";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<WomenSection />} />
          <Route path="/men" element={<MenSection />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
