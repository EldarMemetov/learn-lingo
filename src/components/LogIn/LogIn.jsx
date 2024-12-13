import imgLog from "../../image/log-in-01.png";
import styles from "./LogIn.module.css";

export default function LogIn() {
  return (
    <button className={styles.containerLog}>
      <img src={imgLog} alt="Log In" width={20} height={20} />
      <h3 className={styles.logIn}>Log in</h3>
    </button>
  );
}
