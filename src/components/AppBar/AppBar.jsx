import ModalManager from "../ModalManager/ModalManager";
import ButtonRegistration from "../ButtonRegistration/ButtonRegistration";
import LogIn from "../LogIn/LogIn";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./AppBar.module.css";

export default function AppBar() {
  return (
    <ModalManager>
      {({ openModal }) => (
        <header>
          <div className={styles.centerNav}>
            <Logo />
            <Navigation />
            <div className={styles.containerLogReg}>
              <LogIn onClick={() => openModal("login")} />
              <ButtonRegistration onClick={() => openModal("registration")} />
            </div>
          </div>
        </header>
      )}
    </ModalManager>
  );
}
