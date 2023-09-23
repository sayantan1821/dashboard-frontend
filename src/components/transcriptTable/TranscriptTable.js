import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonGroup from '@mui/material/ButtonGroup';
import "./style.css";
import Button from "@mui/material/Button";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const TranscriptTable = ({transcripts}) => {
  return (
    <TableContainer component={Paper} className="transcript_table">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Upload Date & Time</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left" className="action_cell">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transcripts.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">12 Jun 24 | 15:67</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                  className="action_group_button"
                >
                  <Button className="transcript_edit_button">Edit</Button>
                  <Button className="transcript_delete_button">Delete</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TranscriptTable;
