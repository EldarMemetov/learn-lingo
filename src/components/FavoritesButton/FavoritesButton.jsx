import { CiHeart } from "react-icons/ci";
import style from "./FavoritesButton.module.css";
export default function FavoritesButton() {
  return (
    <>
      <button className={style.buttonHeart}>
        <CiHeart size={26} className={style.heardIcon} />
      </button>
    </>
  );
}
