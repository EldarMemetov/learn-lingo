import { useSelector } from "react-redux";
import TeacherItem from "../../components/TeacherItem/TeacherItem";
import style from "./Favorites.module.css";

const Favorites = () => {
  const teachers = useSelector((state) => state.teacher.teacher);
  const favorites = useSelector((state) => state.teacher.favorites);

  const favoriteTeachers = teachers.filter((teacher) =>
    favorites.includes(teacher.id)
  );

  return (
    <section className={style.sectionFavorites}>
      <h1>Featured Teachers</h1>
      {favoriteTeachers.length === 0 ? (
        <p>You have no chosen teachers. Start adding them!</p>
      ) : (
        <ul className={style.containerTeachers}>
          {favoriteTeachers.map((teacher) => (
            <li key={teacher.id} className={style.itemTeachers}>
              <TeacherItem teacher={teacher} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Favorites;
