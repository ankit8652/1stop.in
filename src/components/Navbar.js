import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#152C5B", height: 60 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img
            src="/flow-logo.png"
            alt="Flow Logo"
            style={{ height: "30px", marginLeft: "20px" }}
          />
        </Typography>
        <Button
          variant="text"
          startIcon={<AutoAwesomeRoundedIcon />}
          sx={{
            color: "#000",
            backgroundColor: "#E1EDFF",
            "&:hover": { backgroundColor: "#E1EDFF" },
            border: "1px solid #FFF",
            fontWeight: "bold",
            textTransform: "none",
            fontFamily: "Roboto",
            minWidth: 0, // Set minimum width to 0
            marginRight: "10px",
          }}
        >
          AI Tools
        </Button>
        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            fontFamily: "Roboto",
            minWidth: 0, // Set minimum width to 0
            marginRight: "10px",
          }}
        >
          Upgrade to Premium
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E1EDFF",
            color: "#000",
            "&:hover": { backgroundColor: "#E1EDFF" },
            fontWeight: "bold",
            textTransform: "none",
            fontFamily: "Roboto",
            minWidth: 0, // Set minimum width to 0
          }}
          endIcon={<AccountCircleRoundedIcon />}
        >
          Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
}
