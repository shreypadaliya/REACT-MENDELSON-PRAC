import React from "react";
import { Box, Typography } from "@mui/material";
import group30 from "../assets/images/Group 30.png";
import project1 from "../assets/images/Our Project_ 1 img 1.png";
import project2 from "../assets/images/Our Project _ 2 img 1.png";
import project3 from "../assets/images/Our Project_ 3 img 1.png";

const Ourprojects = () => {
  return (
    <>
      <Box
        display={"flex"}
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
          paddingBottom: "30px",
        }}
      >
        <Typography variant="h4">OUR PROJECTS</Typography>
        <img src={group30} alt="" />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
        }}
      >
        <Box>
          <img className="main9" src={project1} alt="" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box>
            <img className="main9" src={project2} alt="" />
          </Box>
          <Box>
            <img className="main9" src={project3} alt="" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Ourprojects;
