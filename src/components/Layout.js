import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PeopleIcon from "@mui/icons-material/People";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import LinkedIn from "./LinkedIn";
import JobTracker from "./JobTracker";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const drawerWidth = 240;

export default function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Navbar />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { text: "Dashboard", icon: <HomeOutlinedIcon /> },
              {
                text: "Job Tracker",
                icon: <DashboardCustomizeOutlinedIcon />,
              },
              { text: "Resume Builder", icon: <InsertDriveFileOutlinedIcon /> },
              { text: "Contacts", icon: <PermIdentityOutlinedIcon /> },
              { text: "Documents", icon: <DescriptionOutlinedIcon /> },
              { text: "Linkedin", icon: <LinkedInIcon /> },
              { text: "Community", icon: <PeopleIcon /> },
              { text: "Find Recruiters", icon: <SearchOutlinedIcon /> },
            ].map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  sx={{
                    "&:hover .MuiListItemIcon-root, &:hover .MuiListItemText-root":
                      {
                        color: "#4285F4",
                        transition: "color 0.3s ease", // Add transition effect
                      },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* <LinkedIn /> */}
        {/* <Dashboard /> */}
        <JobTracker />
      </Box>
    </Box>
  );
}
