import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import S25 from "./pages/DiscoverS25";
import Store from "./pages/Loja";
import BuyS25U from "./pages/StoreS25U";
import BuyS25P from "./pages/StoreS25P";
import BuyS25 from "./pages/StoreS25";
import BuyS24 from "./pages/StoreS24";
import BuyS24P from "./pages/StoreS24P"
import BuyS24U from "./pages/StoreS24U"
import BuyZFold from "./pages/StoreZFold"
import BuyZFlip from "./pages/StoreZFlip"





function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Samsung-S25-Ultra" element={<S25 />} />
          <Route path="/Loja" element={<Store />} />
          <Route path="/Comprar-Samsung-S25-Ultra" element={<BuyS25U />} />
          <Route path="/Comprar-Samsung-S25-Plus" element={<BuyS25P />} />
          <Route path="/Comprar-Samsung-S25" element={<BuyS25 />} />
          <Route path="/Comprar-Samsung-S24-Ultra" element={<BuyS24U />} />
          <Route path="/Comprar-Samsung-S24-Plus" element={<BuyS24P />} />
          <Route path="/Comprar-Samsung-S24" element={<BuyS24 />} />
          <Route path="/Comprar-Samsung-Z-Fold6" element={<BuyZFold />} />
          <Route path="/Comprar-Samsung-Z-Flip6" element={<BuyZFlip />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
