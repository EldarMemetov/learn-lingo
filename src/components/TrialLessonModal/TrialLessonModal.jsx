import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import Modal from "../Modal/Modal";
import style from "./TrialLessonModal.module.css";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  reason: yup.string().required("Please select a reason"),
});

const TrialLessonModal = ({ isOpen, onClose, teacher }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Booking data:", data);
    toast.success("Trial lesson booked successfully!");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book trial lesson">
      <p className={style.description}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className={style.teacherInfo}>
        <img
          src={teacher.avatar_url}
          alt={`${teacher.name} ${teacher.surname}`}
          className={style.reviewerPhoto}
        />
        <div className={style.teacherNameContainer}>
          <p className={style.teacher}>Your teacher:</p>
          <p className={style.teacherName}>{teacher.name}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <p className={style.reasonLabel}>
          What is your main reason for learning English?
        </p>
        <div className={style.radioGroup}>
          <label className={style.labelInput}>
            <input
              type="radio"
              value="Career and business"
              {...register("reason")}
            />
            Career and business
          </label>
          <label className={style.labelInput}>
            <input
              type="radio"
              value="Lesson for kids"
              {...register("reason")}
            />
            Lesson for kids
          </label>
          <label className={style.labelInput}>
            <input type="radio" value="Living abroad" {...register("reason")} />
            Living abroad
          </label>
          <label className={style.labelInput}>
            <input
              type="radio"
              value="Exams and coursework"
              {...register("reason")}
            />
            Exams and coursework
          </label>
          <label className={style.labelInput}>
            <input
              type="radio"
              value="Culture, travel or hobby"
              {...register("reason")}
            />
            Culture, travel or hobby
          </label>
          {errors.reason && (
            <p className={style.errorText}>{errors.reason.message}</p>
          )}
        </div>
        <div className={style.inputGroup}>
          <label></label>
          <input
            placeholder="Full Name"
            type="text"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className={style.errorText}>{errors.fullName.message}</p>
          )}
        </div>
        <div className={style.inputGroup}>
          <label></label>
          <input placeholder="Email" type="email" {...register("email")} />
          {errors.email && (
            <p className={style.errorText}>{errors.email.message}</p>
          )}
        </div>
        <div className={style.inputGroup}>
          <label></label>
          <input
            placeholder="Phone number"
            type="text"
            {...register("phone")}
          />
          {errors.phone && (
            <p className={style.errorText}>{errors.phone.message}</p>
          )}
        </div>
        <button type="submit" className={style.submitButton}>
          Book
        </button>
      </form>
    </Modal>
  );
};

export default TrialLessonModal;
