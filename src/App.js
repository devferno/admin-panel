import Layout from "./components/Layout";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { Navigate, Outlet } from "react-router-dom";
import Simulation from "./components/Simulations";
import Users from "./components/Users";
import Acceuil from "./components/Acceuil";
import axios from "axios";

axios.defaults.baseURL = "https://simulation-credit.herokuapp.com/api/";

export default function App() {
  //set background to gray
  // document.body.style.background = "#e3e3e3";

  //protected Routes
  const ProtectedRoute = () => {
    const isLogin = localStorage.getItem("access-token");
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
          <Route path="/simulations" element={<Simulation />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Acceuil />} />
        </Route>
      </Routes>
    </>
  );
}
