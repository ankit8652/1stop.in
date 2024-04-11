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
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 1100,
  height: 720,
  overflowY: "auto",
  bgcolor: "rgb(224,237,254)",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate(); // Get the navigate function

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem) => {
    // console.log("Clicked on:", menuItem);
    navigate(menuItem); // Navigate to the "/mock-interview" path
    handleMenuClose();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            minWidth: 0,
          }}
        >
          AI Tools
          <KeyboardArrowDownIcon />
        </Button>
        <Menu
          sx={{ marginTop: "5px" }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right", // Adjust horizontal position here
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right", // Adjust horizontal position here
          }}
        >
          <MenuItem onClick={() => handleMenuItemClick("/mock-interview")}>
            <InterpreterModeIcon
              style={{
                width: "35px",
                height: "35px",
                fontSize: "1.5rem",
                color: "#2196F3",
                marginRight: 8,
                backgroundColor: "#F8FBFE",
                borderRadius: "50%",
                padding: 5,
              }}
              to="/mock-interview"
            />
            Mock Interview
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("cover-letter")}>
            <DescriptionOutlinedIcon
              style={{
                width: "35px",
                height: "35px",
                fontSize: "1.5rem",
                color: "#2196F3",
                marginRight: 8,
                backgroundColor: "#F8FBFE",
                borderRadius: "50%",
                padding: 5,
              }}
            />
            Cover Letter
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("post-generator")}>
            <PostAddOutlinedIcon
              style={{
                width: "35px",
                height: "35px",
                fontSize: "1.5rem",
                color: "#2196F3",
                marginRight: 8,
                backgroundColor: "#F8FBFE",
                borderRadius: "50%",
                padding: 5,
              }}
            />
            Post Generator
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick("linkedin-headline-generator")}
          >
            <ViewHeadlineOutlinedIcon
              style={{
                width: "35px",
                height: "35px",
                fontSize: "1.5rem",
                color: "#2196F3",
                marginRight: 8,
                backgroundColor: "#F8FBFE",
                borderRadius: "50%",
                padding: 5,
              }}
            />
            LinkedIn Headline Generator
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuItemClick("/linkedin-about-section-generator");
            }}
          >
            <PostAddOutlinedIcon
              style={{
                width: "35px",
                height: "35px",
                fontSize: "1.5rem",
                color: "#2196F3",
                marginRight: 8,
                backgroundColor: "#F8FBFE",
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
            minWidth: 0,
            marginLeft: "30px",
            marginRight: "30px",
          }}
          onClick={handleOpen}
        >
          Upgrade to Premium
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ mb: 2 }}
            >
              Upgrade your plan and get AI Assistance
            </Typography>
            <Divider sx={{ border: "1px solid rgb(240,240,240)", w: "100%" }} />
            <Container>
              <Typography
                variant="h5"
                id="modal-modal-description"
                sx={{ mt: 4 }}
              >
                Supercharge your career with our Premium features!
              </Typography>
              <Typography
                variant="body1"
                id="modal-modal-description"
                sx={{ mb: 4 }}
              >
                Choose a plan to continue
              </Typography>
              <Container
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                <Card
                  sx={{
                    minWidth: 275,
                    maxWidth: 425,
                    border: "1px solid rgb(169,198,245)",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5">Premium Weekly</Typography>
                    <Typography variant="body2">
                      Careerflow Premium members are 10X more effective in their
                      job search!
                    </Typography>
                    <Divider
                      sx={{
                        border: "1px solid rgb(240,240,240)",
                        mt: 4,
                        mb: 4,
                      }}
                    />
                    <Typography variant="body1">
                      ✓ Everything in the free version, plus:
                    </Typography>
                    <Typography variant="body1">
                      ✓ AI Cover Letter Generator
                    </Typography>
                    <Typography variant="body1">
                      ✓ AI Resume Builder (NEW)
                    </Typography>
                    <Typography variant="body1">
                      ✓ AI LinkedIn Post Writer
                    </Typography>
                    <Typography variant="body1">
                      ✓ AI LinkedIn Headline / About Writer
                    </Typography>
                    <Typography variant="body1">
                      ✓ ATS Keyword / Skill Match (Newly Launched)
                    </Typography>
                    <Typography variant="body1">
                      ✓ Job Auto-Apply (coming soon)
                    </Typography>
                    <Typography variant="body1">
                      ✓ Access to Premium Community
                    </Typography>
                    <Typography variant="body1">
                      ✓ Perks and Discounts on Services
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                      ✓ Job Description Summarizer
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    minWidth: 425,
                    maxWidth: 425,
                    border: "1px solid rgb(169,198,245)",
                  }}
                >
                  <CardContent>
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">
                        ✓ Instant access, Cancel anytime.
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="199"
                        name="radio-buttons-group"
                      >
                        <Container
                          sx={{
                            bgcolor: "rgb(236,242,253)",
                            borderRadius: 2,
                            p: 0.6,
                            font: 12,
                            mt: 1,
                            width: 390,
                            border: "1px solid rgb(169,198,245)",
                          }}
                        >
                          <FormControlLabel
                            sx={{ mt: -1 }}
                            value="199"
                            control={<Radio />}
                            label="199 per week"
                          />
                          <Typography variant="body2" sx={{ mt: -1 }}>
                            paid weekly
                          </Typography>
                        </Container>
                        <Container
                          sx={{
                            bgcolor: "rgb(236,242,253)",
                            borderRadius: 2,
                            p: 1,
                            font: 12,
                            mt: 1,
                            border: "1px solid rgb(169,198,245)",
                          }}
                        >
                          <FormControlLabel
                            sx={{ mt: -1 }}
                            value="500"
                            control={<Radio />}
                            label="500 per month"
                          />
                          <Typography variant="body2" sx={{ mt: -1 }}>
                            paid weekly
                          </Typography>
                        </Container>
                        <Container
                          sx={{
                            bgcolor: "rgb(236,242,253)",
                            borderRadius: 2,
                            p: 1,
                            font: 12,
                            mt: 1,
                            border: "1px solid rgb(169,198,245)",
                          }}
                        >
                          <FormControlLabel
                            sx={{ mt: -1 }}
                            value="400"
                            control={<Radio />}
                            label="400 per month"
                          />
                          <Typography sx={{ mt: -1 }} variant="body2">
                            paid weekly
                          </Typography>
                        </Container>
                        <Container
                          sx={{
                            bgcolor: "rgb(236,242,253)",
                            borderRadius: 2,
                            p: 1,
                            font: 12,
                            mt: 1,
                            border: "1px solid rgb(169,198,245)",
                          }}
                        >
                          <FormControlLabel
                            sx={{ mt: -1 }}
                            value="250"
                            control={<Radio />}
                            label="250 per month"
                          />
                          <Typography sx={{ mt: -1 }} variant="body2">
                            paid weekly
                          </Typography>
                        </Container>
                      </RadioGroup>
                    </FormControl>
                    <Container
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        bgcolor: "rgb(81,140,232)",
                        mt: 2.5,
                        borderRadius: 2,
                        mb: 2.5,
                      }}
                    >
                      <Button
                        sx={{
                          color: "#fff",
                          width: "100%",
                        }}
                      >
                        Unloack Premium Features
                      </Button>
                    </Container>
                    <Typography variant="body2">
                      Secure payment by Stripe.com. All payments are fully
                      encrypted and PCI-compliant. We accept multiple payment
                      methods.
                    </Typography>
                  </CardContent>
                </Card>
              </Container>
            </Container>
          </Box>
        </Modal>

        <IconButton
          style={{
            backgroundColor: "#E1EDFF",
            color: "#000",
            "&:hover": { backgroundColor: "#E1EDFF" },
            fontWeight: "bold",
            textTransform: "none",
            minWidth: 0,
            padding: "6px", // Adjust padding
            borderRadius: "5px", // Add border radius
            marginLeft: "5px",
          }}
        >
          <Typography
            variant="body1"
            style={{ marginLeft: "5px", paddingRight: "5px" }}
          >
            Profile
          </Typography>
          <AccountCircleRoundedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
