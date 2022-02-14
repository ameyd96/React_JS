import { Route, Switch, Redirect } from "react-router-dom";

import Product from "./pages/Product";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";
import MainHrader from "./Components/MainHeader";

function App() {
  return (
    <div>
      <MainHrader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>

          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/product/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
