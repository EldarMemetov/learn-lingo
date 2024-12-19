import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeacher } from "../../redux/teacher/operations";
import {
  selectTeacher,
  selectIsLoading,
  selectError,
} from "../../redux/teacher/selectors";
import TeacherItem from "../TeacherItem/TeacherItem";
import styled from "./TeacherList.module.css";
const TeacherList = () => {
  const dispatch = useDispatch();

  const teachers = useSelector(selectTeacher);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTeacher());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styled.containerTeachers}>
      {teachers.length > 0 ? (
        <ul className={styled.listTeacher}>
          {teachers.map((teacher) => (
            <li className={styled.itemTeachers} key={teacher.id}>
              <TeacherItem teacher={teacher} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No teachers available.</p>
      )}
    </div>
  );
};

export default TeacherList;
