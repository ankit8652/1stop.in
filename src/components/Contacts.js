import React, { useState } from "react";
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
import CustomizedDialogs from "./CustomizedDialogs";

const Contacts = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleSaveContact = (contact) => {
    setContacts([...contacts, contact]);
    setIsDialogOpen(false);
  };

  // Filtering contacts based on the search query
  const filteredContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            // color="primary"
            sx={{
              bgcolor: "var(--buttonColor)",
              "&:hover": {
                bgcolor: "var(--buttonHoverColor)",
              },
            }}
            startIcon={<PersonAddIcon />}
            onClick={handleDialogOpen}
          >
            Create Contact
          </Button>
        </Grid>
      </Grid>

      {/* Section 2 */}
      <TextField
        // label="Search"
        placeholder="Search"
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          marginBottom: "20px",
          width: "30%",
          backgroundColor: "#ffffff",
          borderRadius: "4px",
        }}
      />

      {/* Section 3 */}
      <TableContainer
        component={Paper}
        sx={{ background: "transparent", border: "1px solid white" }}
      >
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ color: "#fff" }}>
                Full Name
              </TableCell>
              <TableCell align="left" sx={{ color: "#fff" }}>
                Company
              </TableCell>
              <TableCell align="left" sx={{ color: "#fff" }}>
                Location
              </TableCell>
              <TableCell align="left" sx={{ color: "#fff" }}>
                Relationship
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ color: "white" }}>
            {filteredContacts.length === 0 ? (
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  <NoDataIcon
                    sx={{
                      fontSize: "72px",
                      color: "rgba(255, 255, 255, 0.75)",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    sx={{ marginTop: "10px", color: "#fff" }}
                  >
                    No contacts found
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredContacts.map((contact, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ color: "white" }}>
                    {contact.fullName}
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {contact.company}
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {contact.location}
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {contact.contactType}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Render the dialog */}
      <CustomizedDialogs
        open={isDialogOpen}
        onClose={handleDialogClose}
        onSave={handleSaveContact}
      />
    </>
  );
};

export default Contacts;
