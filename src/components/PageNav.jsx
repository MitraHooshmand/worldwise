import { NavLink } from "react-router-dom";
import styles from "../components/PageNav.module.css";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="../../">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/Product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
