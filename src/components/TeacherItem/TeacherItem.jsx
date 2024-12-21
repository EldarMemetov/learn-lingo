import { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import style from "./TeacherItem.module.css";
import TrialLessonModal from "../TrialLessonModal/TrialLessonModal";
import { CiHeart } from "react-icons/ci";
const TeacherItem = ({ teacher }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prevState) => !prevState);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={style.teacherContainer}>
      <div className={style.teacherPhotoWrapper}>
        <img
          src={teacher.avatar_url}
          alt={`${teacher.name} ${teacher.surname}`}
          className={style.teacherPhoto}
        />
        <span className={style.onlineIndicator}></span>
      </div>

      <div className={style.contentBlock}>
        <div className={style.teacherInfo}>
          <div className={style.leftInfo}>
            <p className={style.languagesLabel}>Languages</p>
            <h2 className={style.teacherName}>
              {teacher.name} {teacher.surname}
            </h2>
          </div>

          <ul className={style.rightInfo}>
            <li className={style.itemInfo}>
              <IoBookOutline className={style.iconStyle} />
              <p className={style.textInfo}>
                Lessons Done: {teacher.lessons_done}
              </p>
            </li>
            <li className={style.itemInfo}>
              <FaStar className={style.iconStyle} style={{ color: "gold" }} />
              <p className={style.textInfo}>Rating: {teacher.rating}</p>
            </li>
            <li className={style.itemInfo}>
              <p className={style.textInfo}>
                Price per Hour:{" "}
                <span className={style.infoMainGold}>
                  {teacher.price_per_hour}$
                </span>
              </p>
            </li>
            <li className={style.itemInfo} style={{ marginLeft: "auto" }}>
              <button className={style.buttonHeart}>
                <CiHeart size={26} className={style.heardIcon} />
              </button>
            </li>
          </ul>
        </div>
        <ul className={style.ListInformationL}>
          <li className={style.itemInformationL}>
            <p className={style.infoMainHistoryNext}>
              Speaks:
              <span className={style.textInformationLSpeaks}>
                {teacher.languages.join(", ")}
              </span>
            </p>
          </li>
          <li className={style.itemInformationL}>
            {" "}
            <p className={style.textInformationL}>
              <span className={style.infoMainHistory}>Lesson Info:</span>{" "}
              {teacher.lesson_info}
            </p>
          </li>
          <li className={style.itemInformationL}>
            <p className={style.textInformationL}>
              <span className={style.infoMainHistory}>Conditions:</span>{" "}
              {teacher.conditions}
            </p>
          </li>
          <li className={style.itemInformationL}>
            {" "}
            <button className={style.readMoreButton} onClick={toggleExpanded}>
              {isExpanded ? "Show less" : "Read more"}
            </button>
          </li>
        </ul>

        {isExpanded && (
          <>
            <p className={style.experience}>{teacher.experience}</p>

            {teacher.reviews && teacher.reviews.length > 0 && (
              <div className={style.reviewsContainer}>
                <ul className={style.reviewsList}>
                  {teacher.reviews.map((review, index) => (
                    <li key={index} className={style.reviewItem}>
                      <div className={style.containerReviewPeople}>
                        <img
                          src={review.reviewer_avatar_url || teacher.avatar_url}
                          alt={
                            review.reviewer_name ||
                            `${teacher.name} ${teacher.surname}`
                          }
                          className={style.reviewerPhoto}
                        />

                        <div className={style.reviewContent}>
                          <div className={style.reviewerInfo}>
                            {review.reviewer_name && (
                              <p className={style.reviewerName}>
                                {review.reviewer_name}
                              </p>
                            )}
                            {review.reviewer_rating && (
                              <div className={style.ratingBlock}>
                                <FaStar
                                  style={{ color: "gold" }}
                                  className={style.starIcon}
                                />
                                <p className={style.reviewerRating}>
                                  {review.reviewer_rating}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      {review.comment && (
                        <p className={style.reviewText}>{review.comment}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {isExpanded && (
              <button className={style.buttonTrial} onClick={openModal}>
                Book trial lesson
              </button>
            )}

            <TrialLessonModal
              isOpen={isModalOpen}
              onClose={closeModal}
              teacher={teacher}
            />
          </>
        )}

        {teacher.levels && (
          <div className={style.listInformationL}>
            <ul className={style.levelList}>
              {teacher.levels.map((level, index) => (
                <li
                  key={index}
                  className={
                    index === 0 ? style.levelItemFirst : style.levelItem
                  }
                >
                  <p>#{level}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherItem;
