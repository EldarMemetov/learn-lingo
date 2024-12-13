import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
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
    </nav>
  );
}
