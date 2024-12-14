import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./RegistrationForm.module.css";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function RegistrationForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className={styles.registrationForm}>
      <p className={styles.description}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <input
            {...register("name")}
            placeholder="Name"
            className={styles.input}
          />
          <p className={styles.error}>{errors.name?.message}</p>
        </div>
        <div className={styles.inputContainer}>
          <input
            {...register("email")}
            placeholder="Email"
            className={styles.input}
          />
          <p className={styles.error}>{errors.email?.message}</p>
        </div>
        <div className={styles.inputContainer}>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <p className={styles.error}>{errors.password?.message}</p>
        </div>
        <button type="submit" className={styles.submitButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
