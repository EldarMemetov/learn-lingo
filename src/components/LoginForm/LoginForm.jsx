import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import style from "./LoginForm.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function LoginForm({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style.loginForm}>
      <p className={style.description}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a teacher.
      </p>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.inputContainer}>
          <label className={style.label}>Email:</label>
          <input
            {...register("email")}
            placeholder="Email"
            className={style.input}
          />
          <p className={style.error}>{errors.email?.message}</p>
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>Password:</label>
          <div className={style.passwordContainer}>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={style.input}
            />
            <span
              className={style.eyeIcon}
              onClick={togglePasswordVisibility}
              role="button"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <p className={style.error}>{errors.password?.message}</p>
        </div>
        <button type="submit" className={style.submitButton}>
          Log In
        </button>
      </form>
    </div>
  );
}
