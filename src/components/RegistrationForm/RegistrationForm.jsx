import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebaseConfig";
import { toast, Toaster } from "react-hot-toast";
import styles from "./RegistrationForm.module.css";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function RegistrationForm({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      toast.success(
        `User ${userCredential.user.email} successfully registered!`
      );
      reset();
      if (onClose) onClose();
    } catch (err) {
      toast.error(`Registration failed: ${err.message}`);
    }
  };

  return (
    <div className={styles.registrationForm}>
      <Toaster position="top-right" reverseOrder={false} />
      <p className={styles.description}>
        Thank you for your interest in our platform! Please provide your details
        to register.
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
          <div className={styles.passwordContainer}>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={styles.input}
            />
            <span
              className={styles.eyeIcon}
              onClick={togglePasswordVisibility}
              role="button"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <p className={styles.error}>{errors.password?.message}</p>
        </div>
        <button type="submit" className={styles.submitButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
