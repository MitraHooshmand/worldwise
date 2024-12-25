import styles from "./CityItem.module.css";
import PropTypes from "prop-types";
function CityItem({ city }) {
  const { cityName } = city;
  return (
    <li className={styles.cityItem}>
      {" "}
      <h3>{cityName}</h3>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired, // Assuming city has a name property
    // Add other properties of the city object if needed
  }).isRequired, // Mark city as required
};
export default CityItem;
