import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="Product" element={<Product />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="App" element={<AppLayout />}>
            <Route index element={<p>index list</p>} />
            <Route path="cities" element={<p>list of cities</p>} />
            <Route path="countries" element={<p>List of countries</p>} />
            <Route path="form" element={<p>form</p>} />
          </Route>

          <Route path="Login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
