import { Grid, Typography } from "@mui/material";
import React from "react";
import convector from "../assets/images/Consultation vector 1.png";
import { Box } from "@mui/material";
import asset7 from "../assets/images/Asset 7 1.png";

const Consultation = () => {
  return (
    <>
      <Grid spacing={10} container sx={{ marginTop: "60px" }}>
        <Grid item xs={12} sm={12} md={6} sx={{ position: "relative" }}>
          <img
            style={{ position: "absolute", left: "0px", top: "-200px" }}
            src={asset7}
            alt=""
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "center", md: "right" },
              alignItems: { xs: "center", sm: "center", md: "end" },
              paddingRight: { xs: "0px", sm: "0px", md: "60px" },
            }}
          >
            <img src={convector} className="conimg" alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "center", sm: "center", md: "left" },
              paddingleft: { xs: "0px", sm: "0px", md: "150px" },
              alignItems: { xs: "center", sm: "center", md: "start" },
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: "42px", paddingTop: "50px" }}
            >
              Consultation and <br />
              Research
            </Typography>
            <Typography
              variant="subtitle"
              sx={{ fontSize: "16px", paddingTop: "15px" }}
            >
              <Box>Lorem ipsum dolor sit amet, consectetur adipiscing</Box>
              <Box>elit. Faucibus quam quis egestas orci. Scelerisque eu,</Box>
              <Box>vitae sapien, pellentesque et. Sit ac fames facilisis</Box>
              <Box>nibh faucibus.</Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Consultation;
