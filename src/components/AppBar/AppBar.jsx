import ButtonRegistration from "../ButtonRegistration/ButtonRegistration";
import LogIn from "../LogIn/LogIn";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header>
      <div className={styles.centerNav}>
        <Logo />
        <Navigation />
        <div className={styles.containerLogReg}>
          <LogIn />
          <ButtonRegistration />
        </div>
      </div>
    </header>
  );
}
