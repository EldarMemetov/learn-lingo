import { lazy, Suspense } from "react";
import HomePage from "../../pages/HomePage/HomePage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Toaster } from "react-hot-toast";
import Loading from "../Loading/Loading";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const Teachers = lazy(() => import("../../pages/Teachers/Teachers"));

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
