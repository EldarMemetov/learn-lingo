import styles from "./Logo.module.css";
import ukraine from "../../image/ukraine.png";
export default function Logo() {
  return (
    <div className={styles.containerLogo}>
      <img src={ukraine} alt="ukraine" width={28} height={28} />
      <h3 className={styles.logo}>LearnLingo</h3>
    </div>
  );
}
