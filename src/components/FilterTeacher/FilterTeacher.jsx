import { useDispatch, useSelector } from "react-redux";
import {
  setLanguageFilter,
  setLevelFilter,
  setPriceFilter,
  resetFilters,
} from "../../redux/teacher/slice";
import { selectFilters } from "../../redux/teacher/selectors";
import styles from "./FilterTeacher.module.css";
const FilterTeacher = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleLanguageChange = (e) => {
    dispatch(setLanguageFilter(e.target.value));
  };

  const handleLevelChange = (e) => {
    dispatch(setLevelFilter(e.target.value));
  };

  const handlePriceChange = (e) => {
    dispatch(setPriceFilter(Number(e.target.value)));
  };

  return (
    <section>
      <div className={styles.containerFilter}>
        <div className={styles.filterInformation}>
          <label htmlFor="languageFilter" className={styles.nameFilter}>
            Languages
          </label>
          <select
            id="languageFilter"
            value={filters.language}
            onChange={handleLanguageChange}
          >
            <option value="">All Languages</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
        <div className={styles.filterInformation}>
          <label htmlFor="levelFilter" className={styles.nameFilter}>
            Level of knowledge
          </label>
          <select
            id="levelFilter"
            value={filters.level}
            onChange={handleLevelChange}
          >
            <option value="">All Levels</option>
            <option value="A1">A1 - Beginner</option>
            <option value="A2">A2 - Elementary</option>
            <option value="B1">B1 - Intermediate</option>
            <option value="B2">B2 - Upper-Intermediate</option>
            <option value="C1">C1 - Advanced</option>
            <option value="C2">C2 - Proficient</option>
          </select>
        </div>
        <div className={styles.filterInformation}>
          <label htmlFor="priceFilter" className={styles.nameFilter}>
            Price
          </label>
          <select id="priceFilter" onChange={handlePriceChange}>
            <option value="">All Prices</option>
            <option value="20">20$</option>
            <option value="25">25$</option>
            <option value="30">30$</option>
            <option value="35">35$</option>
            <option value="40">40$</option>
            <option value="45">45$</option>
            <option value="50">50$</option>
          </select>
        </div>
        <button
          className={styles.resetButton}
          onClick={() => dispatch(resetFilters())}
        >
          Reset Filters
        </button>
      </div>
    </section>
  );
};

export default FilterTeacher;
