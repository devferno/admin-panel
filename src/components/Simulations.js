import {
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";

export default function Simulation() {
  // useEffect(() => {
  //   axios.get("https://simulation-credit.herokuapp.com/api/get-simulations/", {
  //     headers: { access: localStorage.getItem("access-token") },
  //   });
  // }, []);

  const fakeSimulation = [
    {
      prix: 14509,
      duree: 4200,
      taux: 2.3,
      projet: "want money",
      metier: "fonctionnaire",
    },
    {
      prix: 14509,
      duree: 4200,
      taux: 2.3,
      projet: "want money",
      metier: "fonctionnaire",
    },
    {
      prix: 14509,
      duree: 4200,
      taux: 2.3,
      projet: "want money",
      metier: "fonctionnaire",
    },
    {
      prix: 14509,
      duree: 4200,
      taux: 2.3,
      projet: "want money",
      metier: "fonctionnaire",
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>montant</TableCell>
            <TableCell>duree</TableCell>
            <TableCell>taux</TableCell>
            <TableCell>projet</TableCell>
            <TableCell>metier</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fakeSimulation.map((simulation) => (
            <TableRow>
              <TableCell>{simulation.prix}</TableCell>
              <TableCell>{simulation.duree}</TableCell>
              <TableCell>{simulation.taux}</TableCell>
              <TableCell>{simulation.projet}</TableCell>
              <TableCell>{simulation.metier}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
