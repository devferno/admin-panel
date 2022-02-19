import React from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import { FiUsers, FiSliders, FiBriefcase, FiDollarSign } from "react-icons/fi";
import Simulation from "../Simulations";
const Acceuil = () => {
  const status = [
    {
      icon: <FiUsers fontSize={"50px"} />,
      capture: "Nombre des Utitlisateurs",
      title: "",
      chiffre: 1728,
    },
    {
      icon: <FiSliders fontSize={"50px"} />,
      capture: "Nombre des Simulations",
      title: "",
      chiffre: 9028,
    },
    {
      icon: <FiBriefcase fontSize={"50px"} />,
      capture: "Metier plus existait",
      title: "Fonctionnaire",
      chiffre: 1728,
    },
    {
      icon: <FiDollarSign fontSize={"50px"} />,
      capture: "Projet plus demande",
      title: "je veux de l'argent",
      chiffre: 1728,
    },
  ];

  return (
    <Grid container>
      {status.map((item) => (
        <Grid item xs={6} md={3} sx={{ p: 1 }}>
          <Box
            component={Paper}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Typography variant="capture" noWrap gutterBottom>
              {item.capture}
            </Typography>
            {item.icon}
            <Typography variant="h6" position="absolute" sx={{ top: "54%" }}>
              {item.title}
            </Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ mt: 3.5 }}>
              {item.chiffre}
            </Typography>
          </Box>
        </Grid>
      ))}
      <Grid item xs={12} md={6} sx={{ p: 1 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Derniers simulations
          </Typography>
          <Simulation />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Acceuil;
