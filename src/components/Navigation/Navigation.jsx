import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig/firebaseConfig";
import css from "./Navigation.module.css";

export default function Navigation() {
  const [user] = useAuthState(auth);

  const makeNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active, css.textStyle);
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={makeNavLinkClass}>
        Home
      </NavLink>

      <NavLink to="/teachers" end className={makeNavLinkClass}>
        Teachers
      </NavLink>

      {user && (
        <NavLink to="/favorites" className={makeNavLinkClass}>
          Favorites
        </NavLink>
      )}
    </nav>
  );
}
