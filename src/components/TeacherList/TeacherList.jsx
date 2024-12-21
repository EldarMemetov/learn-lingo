import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeacher } from "../../redux/teacher/operations";
import {
  selectTeacher,
  selectIsLoading,
  selectError,
  selectFilters,
} from "../../redux/teacher/selectors";
import TeacherItem from "../TeacherItem/TeacherItem";
import styled from "./TeacherList.module.css";
import Loading from "../Loading/Loading";
import FilterTeacher from "../FilterTeacher/FilterTeacher";

const TeacherList = () => {
  const dispatch = useDispatch();

  const teachers = useSelector(selectTeacher);
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    dispatch(fetchTeacher());
  }, [dispatch]);

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesLanguage =
      !filters.language || teacher.languages.includes(filters.language);

    const matchesLevel =
      !filters.level ||
      teacher.levels.some((level) => level.includes(filters.level));

    const matchesPrice =
      !filters.priceRange || teacher.price_per_hour === filters.priceRange;

    return matchesLanguage && matchesLevel && matchesPrice;
  });

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styled.containerTeachers}>
      <FilterTeacher />

      {filteredTeachers.length > 0 ? (
        <>
          <ul className={styled.listTeacher}>
            {filteredTeachers.slice(0, visibleCount).map((teacher) => (
              <li className={styled.itemTeachers} key={teacher.id}>
                <TeacherItem teacher={teacher} />
              </li>
            ))}
          </ul>
          {visibleCount < filteredTeachers.length && (
            <button onClick={handleLoadMore} className={styled.loadMoreButton}>
              Load more
            </button>
          )}
        </>
      ) : (
        <p className={styled.noTeachers}>No teachers available.</p>
      )}
    </div>
  );
};

export default TeacherList;
