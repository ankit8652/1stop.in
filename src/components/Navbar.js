import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import ViewHeadlineOutlinedIcon from "@mui/icons-material/ViewHeadlineOutlined";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log("Clicked on:", menuItem);
    // Add your logic here for handling menu item clicks
    handleMenuClose();
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#152C5B", height: 60 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          <img
            src="/flow-logo.png"
            alt="Flow Logo"
            style={{ height: "30px", marginLeft: "20px" }}
          />
        </Typography>
        <Button
          variant="text"
          startIcon={<AutoAwesomeIcon style={{ marginRight: 5 }} />}
          onClick={handleMenuOpen}
          style={{
            color: "#000",
            backgroundColor: "#E1EDFF",
            border: "1px solid #FFF",
            fontWeight: "bold",
            textTransform: "none",
            fontFamily: "Roboto",
            minWidth: 0,
          }}
        >
          AI Tools
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleMenuItemClick("Mock Interview")}>
            <InterpreterModeIcon
              style={{
                width: "35px",
                height: "35px",
                fontSize: "1.5rem",
                color: "#2196F3",
                marginRight: 8,
                backgroundColor: "#E1EDFF",
                borderRadius: "50%",
                padding: 5,
              }}
            />
            Mock Interview
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Cover Letter")}>
            <DescriptionOutlinedIcon
              style={{
                width: "35px",
                height: "35px",
                fontSize: "1.5rem",
                color: "#2196F3",
                marginRight: 8,
                backgroundColor: "#E1EDFF",
                borderRadius: "50%",
                padding: 5,
              }}
            />
            Cover Letter
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Post Generator")}>
            <PostAddOutlinedIcon
              style={{
                width: "35px",
                height: "35px",
                fontSize: "1.5rem",
                color: "#2196F3",
                marginRight: 8,
                backgroundColor: "#E1EDFF",
                borderRadius: "50%",
                padding: 5,
              }}
            />
            Post Generator
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick("LinkedIn Headline Generator")}
          >
            <ViewHeadlineOutlinedIcon
              style={{
                width: "35px",
                height: "35px",
                fontSize: "1.5rem",
                color: "#2196F3",
                marginRight: 8,
                backgroundColor: "#E1EDFF",
                borderRadius: "50%",
                padding: 5,
              }}
            />
            LinkedIn Headline Generator
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <PostAddOutlinedIcon
              style={{
                width: "35px",
                height: "35px",
                fontSize: "1.5rem",
                color: "#2196F3",
                marginRight: 8,
                backgroundColor: "#E1EDFF",
                borderRadius: "50%",
                padding: 5,
              }}
            />
            LinkedIn About Section Generator
          </MenuItem>
          {/* Add other menu items similarly */}
        </Menu>
        <Button
          variant="contained"
          style={{
            fontWeight: "bold",
            textTransform: "none",
            fontFamily: "Roboto",
            minWidth: 0,
            marginLeft: 10,
          }}
        >
          Upgrade to Premium
        </Button>
        <IconButton
          style={{
            backgroundColor: "#E1EDFF",
            color: "#000",
            "&:hover": { backgroundColor: "#E1EDFF" },
            fontWeight: "bold",
            textTransform: "none",
            fontFamily: "Roboto",
            minWidth: 0, // Set minimum width to 0
          }}
        >
          <AccountCircleRoundedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
