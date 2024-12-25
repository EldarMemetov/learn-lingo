import { lazy, Suspense, useEffect } from "react";
import HomePage from "../../pages/HomePage/HomePage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Toaster } from "react-hot-toast";
import Loading from "../Loading/Loading";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { auth } from "../../firebaseConfig/firebaseConfig";
import { onAuthStateChanged, getIdToken } from "firebase/auth";
import { loadFavorites } from "../../redux/teacher/slice"; // Добавляем импорт для загрузки избранных преподавателей

const Teachers = lazy(() => import("../../pages/Teachers/Teachers"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await getIdToken(user);

          localStorage.setItem("userToken", token);
          localStorage.setItem("userId", user.uid);

          dispatch(refreshUser());

          dispatch(loadFavorites());
        } catch (error) {
          console.error("Ошибка при получении токена:", error);
        }
      } else {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userId");
        dispatch(refreshUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute>
                  <Favorites />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
