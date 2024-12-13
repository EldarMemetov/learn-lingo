import styles from "./InfoLearn.module.css";

export default function InfoLearn() {
  return (
    <div className={styles.containerContent}>
      <h1 className={styles.title}>
        Unlock your potential with the best{" "}
        <span className={styles.titleLang}>language</span> tutors
      </h1>
      <p className={styles.description}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <button className={styles.buttonStarted}>Get started</button>
    </div>
  );
}
