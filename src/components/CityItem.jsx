import styles from "./CityItem.module.css";
function CityItem({ city }) {
  console.log(city);
  return <li className={styles.cityItem}> city</li>;
}

export default CityItem;
