import { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// import axios from "axios";

import { FiEye, FiEyeOff } from "react-icons/fi";
const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  margin: "10px auto",
  padding: theme.spacing(5),
  border: "1px solid #e3e3e3",
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

  //handleChange
  const change = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
    console.log(userInfo);
  };

  //login and send credentials
  // const Signin = (e) => {
  //   axios.post("", {}).then((res) => console.log(res.data));
  // };

  return (
    <Box sx={{ width: { xs: "100%", md: "70%" }, margin: "40px auto" }}>
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
        sx={{
          width: { xs: "94%", sm: "460px", md: "500px" },
          position: "relative",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "25px" }}>
          Sign in
        </Typography>
        <label htmlFor="username">username</label>
        <CustomInput type="text" name="username" required onChange={change} />
        <label htmlFor="password">password</label>

        <CustomInput
          type={isHide ? "password" : "text"}
          name="password"
          required
          onChange={change}
        />
        <IconButton
          onClick={(e) => setHide(!isHide)}
          sx={{ position: "absolute", top: "60%", right: "10%" }}
        >
          {isHide ? <FiEye /> : <FiEyeOff />}
        </IconButton>
        <Button sx={{ margin: "10px 0" }} variant="contained" disableElevation>
          Sign in
        </Button>
      </Form>
    </Box>
  );
}
