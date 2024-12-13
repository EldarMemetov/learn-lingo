import BlogImg from "../../components/BlogImg/BlogImg";
import InfoLearn from "../../components/InfoLearn/InfoLearn";
import InfoWeb from "../../components/InfoWeb/InfoWeb";
import styles from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div>
      <div className={styles.homeContainer}>
        <InfoLearn />
        <BlogImg />
      </div>
      <InfoWeb />
    </div>
  );
}
