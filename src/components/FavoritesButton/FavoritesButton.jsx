import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import style from "./FavoritesButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import clsx from "clsx";

import { selectFavorites } from "../../redux/teacher/selectors";
import { toggleFavorite } from "../../redux/teacher/slice";
import {
  selectIsAuthenticated,
  selectIsRefreshing,
} from "../../redux/auth/selectors";

export default function FavoritesButton({ teacherId }) {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);
  const isUserLoggedIn = useSelector(selectIsAuthenticated);
  const isRefreshing = useSelector(selectIsRefreshing);

  const isFavorite = favorites.includes(teacherId);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const storedFavorites =
        JSON.parse(localStorage.getItem(`favorites_${userId}`)) || [];
      storedFavorites.forEach((id) => {
        if (!favorites.includes(id)) {
          dispatch(toggleFavorite(id));
        }
      });
    }
  }, [dispatch, favorites]);

  const handleClick = () => {
    if (isRefreshing) {
      toast.error("Checking your login status, please wait...");
      return;
    }

    if (!isUserLoggedIn) {
      toast.error("Please log in to add favorites!");
      return;
    }

    dispatch(toggleFavorite(teacherId));
    toast.success(
      isFavorite ? "Removed from favorites!" : "Added to favorites!"
    );
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(style.buttonHeart, {
        [style.buttonHeartActive]: isFavorite,
      })}
    >
      <FaHeart size={26} className={style.heardIcon} />
    </button>
  );
}
