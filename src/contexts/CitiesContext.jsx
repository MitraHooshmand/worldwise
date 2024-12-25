import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
const CitiesContext = createContext();
// const BASE_URL = "http://localhost:8000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        setCities(data);
      } catch (err) {
        alert("There was an error loading data!" + err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const value = useContext(CitiesContext);
  if (value === undefined)
    throw new Error("CitiesContext is used outside of Coties Provider");
  return value;
}

CitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { CitiesProvider, useCities };
