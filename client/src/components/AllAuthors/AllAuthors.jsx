import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';
import DeleteAuthor from "../DeleteAuthor/DeleteAuthor";
import { Link } from "react-router-dom";

const tableStyles = {
  maxWidth: 650,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
}
const tableCointainerStyles = {
  justifyContent: "center",
  maxWidth: 800,
}
const trStyle ={
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid rgba(224, 224, 224, 1)"
}
const tdStyle = {
  ...trStyle,
  borderBottom: "1px solid black"
}

const AllAuthors = ({authors, deteleAuthor}) => {

  return (
    <>
    <h2>List of Authors</h2>
    <TableContainer sx={tableCointainerStyles}>
      <Table sx={tableStyles} aria-label="simple table">
        <TableHead>
          <TableRow sx={tdStyle}>
            <TableCell align="left" style={{fontSize: "large"}}>Name</TableCell>
            <TableCell align="right" style={{fontSize: "large"}}>Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {(authors.length >= 1)
            ? authors.map((author, index) => {
              return <TableRow sx={trStyle} key={index}>
              <TableCell align="center">{author.name}</TableCell>
              <TableCell align="center" style={{display: "flex",gap: "1rem"}}>
                  <DeleteAuthor id={author._id} deteleAuthor={deteleAuthor}/>
                  <Link to={`/edit/${author._id}`}><Button variant="contained" color="warning">Modify</Button></Link>
              </TableCell>
            </TableRow>
            })
            : ""
          }
          {(authors.length < 1)
          ? <TableRow sx={trStyle}>
          <TableCell align="center">There is no Authors...
            <Link to="/new">Create one!</Link>
          </TableCell>
        </TableRow>
        : ""
        }
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default AllAuthors;
