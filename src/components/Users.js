import {
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Paper,
  TableRow,
  Typography,
  Chip,
  Button,
} from "@mui/material";

import React from "react";
import Moment from "react-moment";
import useFetch from "../customHooks/useFetch";
import { green, red } from "@mui/material/colors";

const Users = () => {
  const data = useFetch("/get-clients/");

  console.log(data);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        List des Utilisateurs
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date de creation</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Metier</TableCell>
              <TableCell>Verified</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(0, data.length - 1).map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Moment format="YYYY/MM/DD">{item.created_at}</Moment>
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.jsuis?.name}</TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      backgroundColor: item.verified
                        ? green["A100"]
                        : red["A100"],
                    }}
                    label={item.verified ? "verifie" : "non verifie"}
                  />
                </TableCell>
                <TableCell>
                  <Button size="small" variant="outlined">
                    Contacter
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Users;
