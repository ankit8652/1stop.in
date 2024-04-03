import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import NoDataIcon from "@mui/icons-material/SentimentDissatisfied";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Contacts = () => {
  return (
    <>
      {/* Section 1 */}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: "20px" }}
      >
        <Grid item>
          <Typography variant="h5">Contacts</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PersonAddIcon />}
          >
            Create Contact
          </Button>
        </Grid>
      </Grid>

      {/* Section 2 */}
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ marginBottom: "20px", width: "30%" }}
      />

      {/* Section 3 */}
      <TableContainer component={Paper}>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell align="left">Full Name</TableCell>
              <TableCell align="left">Company</TableCell>
              <TableCell align="left">Location</TableCell>
              <TableCell align="left">Relationship</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                <NoDataIcon
                  sx={{ fontSize: "72px", color: "rgba(0, 0, 0, 0.25)" }}
                />
                <Typography
                  variant="h6"
                  color="textSecondary"
                  sx={{ marginTop: "10px" }}
                >
                  No contacts found
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Contacts;
