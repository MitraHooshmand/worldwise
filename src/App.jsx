import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useState, useEffect } from "react";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const BASE_URL = "http://localhost:8000";
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        setCities(data);
        // console.log(data + "👀😍😍");
      } catch {
        alert("There was an error loading data!");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  // console.log(cities, isLoading + 545465465);

  return (
    <div>
      <p>{cities}</p>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="Product" element={<Product />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="App" element={<AppLayout />}>
            <Route index element={<p>💥index list</p>} />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="countries"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
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
