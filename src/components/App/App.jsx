import { lazy, Suspense } from "react";
import HomePage from "../../pages/HomePage/HomePage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Toaster } from "react-hot-toast";
import Loading from "../Loading/Loading";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const Teachers = lazy(() => import("../../pages/Teachers/Teachers"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
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
