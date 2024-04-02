import React, { useState } from "react";
import { Typography, Button, Slider, Grid } from "@mui/material";

const DashboardChecklist = () => {
  const checklistItems = [
    {
      id: 1,
      title: "Download Chrome Extension",
      description:
        "Our chrome extension is an integrated tool to help you optimize LinkedIn profile, save jobs, save contacts, generate cover letter and more.",
      buttonText: "Download Now",
    },
    {
      id: 2,
      title: "Optimize your LinkedIn profile",
      description:
        "Start optimizing your profile to have better chances of getting contacted by recruiters.",
      buttonText: "Optimize Now",
    },
    {
      id: 3,
      title: "Add your first job",
      description:
        "Start optimizing your profile to have better chances of getting contacted by recruiters.",
      buttonText: "Add Now",
    },
    {
      id: 4,
      title: "Complete Profile",
      description:
        "Start optimizing your profile to have better chances of getting contacted by recruiters.",
      buttonText: "Complete Now",
    },
    {
      id: 5,
      title: "Add your first contact",
      description:
        "Start optimizing your profile to have better chances of getting contacted by recruiters.",
      buttonText: "Add Now",
    },
    {
      id: 5,
      title: "Join Community",
      description:
        "Start optimizing your profile to have better chances of getting contacted by recruiters.",
      buttonText: "Join Now",
    },
  ];

  const [showChecklist, setShowChecklist] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const toggleChecklist = () => {
    setShowChecklist(!showChecklist);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ padding: "2%" }}
        onClick={toggleChecklist}
      >
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="h5" sx={{ fontSize: "24px" }}>Complete your checklist</Typography>
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              Complete a few steps to land your next job.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography variant="body1" sx={{ fontSize: "14px" }}>Steps 0/6</Typography>
            </Grid>
            <Grid item xs>
              <Slider
                value={sliderValue}
                onChange={handleSliderChange}
                sx={{
                  color: "white",
                  "& .MuiSlider-thumb": {
                    display: "none",
                  },
                  height: "0.4rem",
                  borderRadius: "10px"
                }}
              />
            </Grid>
            <Grid item sx={{ display: "flex" }}>
              <Typography variant="body1">{sliderValue}%</Typography>
              <Typography variant="body1">Completed</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {showChecklist && (
        <div>
          {checklistItems.map((item) => (
            <div key={item.id} style={{ padding: "0.6rem" }}>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "1rem",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="body1" sx={{fontStyle: "16px"}}>{item.title}</Typography>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" sx={{ fontSize: "12px", color: "grey" }}>{item.description}</Typography>
                  <Button variant="text" color="primary" sx={{ fontSize: "12px", width: "15%" }}>
                    {item.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardChecklist;
