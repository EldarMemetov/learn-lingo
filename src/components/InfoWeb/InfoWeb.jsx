import styles from "./InfoWeb.module.css";

export default function InfoWeb() {
  return (
    <div className={styles.containerInfo}>
      <ul className={styles.infoList}>
        <li className={styles.infoItem}>
          <h3 className={styles.title}>32,000 +</h3>
          <p className={styles.description}>Experienced tutors</p>
        </li>
        <li className={styles.infoItem}>
          <h3 className={styles.title}>300,000 +</h3>
          <p className={styles.description}>5-star tutor reviews</p>
        </li>
        <li className={styles.infoItem}>
          <h3 className={styles.title}>120 +</h3>{" "}
          <p className={styles.description}>Subjects taught</p>
        </li>
        <li className={styles.infoItem}>
          <h3 className={styles.title}>200 +</h3>{" "}
          <p className={styles.description}>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
}
