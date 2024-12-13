import styles from "./BlogImg.module.css";
import mac from "../../image/mac.png";
import girl from "../../image/girl.png";

export default function BlogImg() {
  return (
    <div className={styles.blogImg}>
      <img
        src={girl}
        alt=""
        width={339}
        height={339}
        className={styles.imgGirl}
      />
      <img src={mac} alt="" className={styles.imgMak} />
    </div>
  );
}
