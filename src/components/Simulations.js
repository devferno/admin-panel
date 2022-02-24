import {
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { amber } from "@mui/material/colors";
import useFetch from "../customHooks/useFetch";
import Moment from "react-moment";

export default function Simulation({ length, disableDate, disableProjet }) {
  const simulations = useFetch("/get-simulations/");

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: amber[200] }}>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Montant</TableCell>
            <TableCell>Duree</TableCell>
            <TableCell>Taux</TableCell>
            {!disableDate && <TableCell>Projet</TableCell>}
            <TableCell>Salaire</TableCell>
            <TableCell>Metier</TableCell>
            {!disableDate && <TableCell>Date simulation</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {simulations
            .slice(0, length ?? simulations.length - 1)
            .map((simulation) => (
              <TableRow key={simulation.id}>
                <TableCell>{simulation.client?.email}</TableCell>
                <TableCell>{simulation.prix}</TableCell>
                <TableCell>{simulation.duree}</TableCell>
                <TableCell>{simulation.taux}</TableCell>
                {!disableProjet && (
                  <TableCell>{simulation.projet?.name}</TableCell>
                )}
                <TableCell>{simulation.salaire}</TableCell>
                <TableCell>{simulation.client?.jsuis?.name}</TableCell>
                {!disableDate && (
                  <TableCell>
                    <Moment format="YYYY/MM/DD">{simulation.created_at}</Moment>
                  </TableCell>
                )}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
