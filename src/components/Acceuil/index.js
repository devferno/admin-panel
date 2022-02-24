import React from "react";
import { Grid, Typography, Box, Paper, Button } from "@mui/material";
import { FiUsers, FiSliders, FiBriefcase, FiDollarSign } from "react-icons/fi";
import Simulation from "../Simulations";
import Example from "./PiChart";
import { amber, blue, red, purple } from "@mui/material/colors";
const Acceuil = () => {
  const status = [
    {
      icon: <FiUsers fontSize={"50px"} />,
      capture: "Nombre des Utitlisateurs",
      title: "",
      chiffre: 1728,
      color: red["A100"],
    },
    {
      icon: <FiSliders fontSize={"50px"} />,
      capture: "Nombre des Simulations",
      title: "",
      chiffre: 9028,
      color: blue["A100"],
    },
    {
      icon: <FiBriefcase fontSize={"50px"} />,
      capture: "Metier plus existait",
      title: "Fonctionnaire",
      chiffre: 1728,
      color: amber["A100"],
    },
    {
      icon: <FiDollarSign fontSize={"50px"} />,
      capture: "Projet plus demande",
      title: "je veux de l'argent",
      chiffre: 1728,
      color: purple["A100"],
    },
  ];

  return (
    <Grid container>
      {status.map((item) => (
        <Grid item xs={6} md={3} sx={{ p: 1 }}>
          <Box
            component={Paper}
            elevation={0}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              background: item.color,
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
      <Grid item xs={12} md={8} sx={{ p: 1 }}>
        <Paper sx={{ p: 3 }} variant="outlined" elevation={0}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              mb: 1,
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Derniers simulations
            </Typography>
            <Button size="small" sx={{ color: purple[600] }}>
              Voir toute les simulation
            </Button>
          </Box>
          <Simulation length={4} disableDate disableProjet />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} sx={{ p: 1 }}>
        <Paper
          variant="outlined"
          sx={{
            p: 3,
            height: "360px",
            width: "100%",
          }}
          elevation={0}
        >
          <Typography variant="h6" gutterBottom>
            Les metiers plus selectionne
          </Typography>
          <Example />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Acceuil;
