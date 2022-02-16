import Layout from "./components/Layout";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { Navigate, Outlet } from "react-router-dom";

import { useState } from "react";

export function Private() {
  return (
    <div>
      <h1>Private</h1>
    </div>
  );
}

export default function App() {
  //change it with the access token
  const [isLogin, setLogin] = useState(false);

  //protected Routes
  const ProtectedRoute = () => {
    return isLogin ? (
      <Layout>
        <Outlet />
      </Layout>
    ) : (
      <Navigate to="/login" />
    );
  };
  return (
    <>
      <CssBaseline />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Private />} />
        </Route>
      </Routes>
    </>
  );
}
