import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebaseConfig";
import { toast, Toaster } from "react-hot-toast";
import style from "./LoginForm.module.css";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function LoginForm({ onClose }) {
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      toast.success(`Welcome back, ${userCredential.user.email}!`);
      reset(); // Очистка формы
      if (onClose) onClose(); // Закрытие формы, если передан onClose
    } catch (err) {
      toast.error(`Login failed: ${err.message}`);
    }
  };

  return (
    <div className={style.loginForm}>
      <Toaster position="top-right" reverseOrder={false} />
      <p className={style.description}>
        Welcome back! Please enter your credentials to log in.
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
