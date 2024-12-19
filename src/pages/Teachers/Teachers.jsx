import TeacherList from "../../components/TeacherList/TeacherList";
import style from "./Teachers.module.css";
export default function Teachers() {
  return (
    <section className={style.sectionTeachers}>
      <TeacherList />
    </section>
  );
}
