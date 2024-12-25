import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import ModalManager from "../ModalManager/ModalManager";
import ButtonRegistration from "../ButtonRegistration/ButtonRegistration";
import LogIn from "../LogIn/LogIn";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./AppBar.module.css";

export default function AppBar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <ModalManager>
      {({ openModal }) => (
        <header className={styles.header}>
          <div className={styles.centerNav}>
            <Logo />
            <Navigation />
            <div className={styles.containerLogReg}>
              {user ? (
                <div className={styles.userMenu}>
                  <span className={styles.userName}>Hello, {user.email}</span>
                  <button
                    onClick={handleLogout}
                    className={styles.logoutButton}
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <>
                  <LogIn onClick={() => openModal("login")} />
                  <ButtonRegistration
                    onClick={() => openModal("registration")}
                  />
                </>
              )}
            </div>
          </div>
        </header>
      )}
    </ModalManager>
  );
}
