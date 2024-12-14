import styles from "./ButtonRegistration.module.css";

export default function ButtonRegistration({ onClick }) {
  return (
    <button className={styles.register} onClick={onClick}>
      Registration
    </button>
  );
}
