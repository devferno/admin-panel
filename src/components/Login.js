import { useState } from "react";
import { Alert, Box, Button, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  margin: "10px auto",
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
}));

const CustomInput = styled("input")(({ theme }) => ({
  padding: theme.spacing(1),
  margin: "8px 0",
  width: "100%",
  border: "1px solid #e5e5e5",
  background: "#f5f5f5",
  borderRadius: theme.shape.borderRadius,
}));

export default function Login() {
  const [isHide, setHide] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  //handleChange
  const change = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  //login and send credentials
  const signin = (e) => {
    e.preventDefault();
    axios
      .post("https://simulation-credit.herokuapp.com/api/token/", userInfo)
      .then((res) => {
        localStorage.setItem("access-token", res.data.access);
        localStorage.setItem("refresh-token", res.data.refresh);
        navigate("/");
      })
      .catch((err) => setErrorMessage(true));
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "70%" },

        margin: "40px auto",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={400}
        sx={{ color: (theme) => theme.palette.primary.dark, fontWeight: "300" }}
        marginBottom="20px"
        align="center"
      >
        Login To Admin Dashboard
      </Typography>
      <Form
        onSubmit={signin}
        sx={{
          width: { xs: "94%", sm: "460px", md: "500px" },
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "25px" }}>
          Sign in
        </Typography>
        {errorMessage ? (
          <Alert severity="error" sx={{ width: "100%" }}>
            donnees invalid
          </Alert>
        ) : null}
        <label htmlFor="username">username</label>
        <CustomInput type="text" name="username" required onChange={change} />
        <label htmlFor="password">password</label>
        <Box
          className="inputgroupe"
          sx={{ position: "relative", width: "100%" }}
        >
          <CustomInput
            type={isHide ? "password" : "text"}
            name="password"
            required
            onChange={change}
          />
          <IconButton
            onClick={(e) => setHide(!isHide)}
            sx={{ position: "absolute", top: "10%", right: "0%" }}
          >
            {isHide ? <FiEye /> : <FiEyeOff />}
          </IconButton>
        </Box>
        <Button
          sx={{ margin: "10px 0" }}
          type="submit"
          variant="contained"
          disableElevation
        >
          Sign in
        </Button>
      </Form>
    </Box>
  );
}
