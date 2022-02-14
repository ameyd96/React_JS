import { Route } from "react-router-dom";

import Product from "./pages/Product";
import Welcome from "./pages/Welcome";
import ProductDetail from './pages/ProductDetail';
import MainHrader from "./Components/MainHeader";

function App() {
  return (
    <div>
      <MainHrader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/product">
          <Product />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;
