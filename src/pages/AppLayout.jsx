import Map from "../components/Map.jsx";
import Sidebar from "../components/Sidebar";
// import User from "../User";

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      {/* <User /> */}
    </div>
  );
}

export default AppLayout;
