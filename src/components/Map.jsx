import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");
  return (
    <>
      <div
        className={styles.mapContainer}
        onClick={() => {
          navigate("form");
        }}
      >
        {lat}
        <p>➖➖</p>
        {lng}
        <button
          onClick={() => {
            setSearchParam({ lat: 1000, lng: 8888 });
          }}
        >
          change position❌❌
        </button>
      </div>
    </>
  );
}

export default Map;
