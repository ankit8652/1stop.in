import * as React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
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
import Contacts from "./Contacts";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Documents from "./Documents";
import JobTracker from "./JobTracker";
import Dashboard from "./Dashboard";
import ResumeBuilder from "./ResumeBuilder";
import LinkedIn from "./LinkedIn";
import MockInterview from "./AI Tools/MockInterview";
import CoverLetter from "./AI Tools/CoverLetter";
import HeadLineGenerator from "./AI Tools/HeadLineGenerator";
import PostGenerator from "./AI Tools/PostGenerator";
import AboutSectionGenertor from "./AI Tools/AboutSectionGenerator";

const drawerWidth = 240;

export default function Layout() {
  return (
    <BrowserRouter>
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
          <Box sx={{ overflow: "auto", backgroundColor: "#F8FBFE" }}>
            <List>
              {[
                { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
                {
                  text: "Job Tracker",
                  icon: <DashboardCustomizeOutlinedIcon />,
                  path: "/job-tracker",
                },
                {
                  text: "Resume Builder",
                  icon: <InsertDriveFileOutlinedIcon />,
                  path: "/resume-builder",
                },
                {
                  text: "Contacts",
                  icon: <PermIdentityOutlinedIcon />,
                  path: "/contacts",
                },
                {
                  text: "Documents",
                  icon: <DescriptionOutlinedIcon />,
                  path: "/documents",
                },
                { text: "LinkedIn", icon: <LinkedInIcon />, path: "/linkedin" },
                { text: "Community", icon: <PeopleIcon />, path: "/community" },
                // {
                //   text: "Find Recruiters",
                //   icon: <SearchOutlinedIcon />,
                //   path: "/find-recruiters",
                // },
              ].map((item, index) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    sx={{
                      "&:hover .MuiListItemIcon-root, &:hover .MuiListItemText-root":
                        {
                          color: "#4285F4",
                          transition: "color 0.3s ease",
                        },
                    }}
                    component={Link} // Use Link instead of anchor tag
                    to={item.path} // Specify the destination path
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
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/job-tracker" element={<JobTracker />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/linkedin" element={<LinkedIn />} />
            <Route path="/mock-interview" element={<MockInterview />} />
            <Route path="/cover-letter" element={<CoverLetter />} />
            <Route
              path="/linkedin-headline-generator"
              element={<HeadLineGenerator />}
            />
            <Route
              path="/linkedin-about-section-generator"
              element={<AboutSectionGenertor />}
            />
            <Route path="/post-generator" element={<PostGenerator />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
