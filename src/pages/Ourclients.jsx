import React from "react";
import { Box, Typography } from "@mui/material";
import group30 from "../assets/images/Group 30.png";
import asset9 from "../assets/images/Assets 9 1.png";
import client1 from "../assets/images/Layer 19.png";
import client2 from "../assets/images/Layer 20.png";
import client3 from "../assets/images/1280px-Brigitte-Logo.png";
import client4 from "../assets/images/Layer 22.png";
import client5 from "../assets/images/BHP_2017_logo.png";
import client6 from "../assets/images/Layer 21.png";
import client7 from "../assets/images/Layer 23.png";
import client8 from "../assets/images/Layer 24.png";
import client9 from "../assets/images/MelbourneWaterLogo-1024x282.png";
import { Grid } from "@mui/material";
const Ourclients = () => {
  return (
    <div>
      <Box
        display={"flex"}
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "80px",
          paddingBottom: "40px",
        }}
      >
        <Typography variant="h4">OUR CLIENTS</Typography>
        <img src={group30} alt="" />
      </Box>
      <Box sx={{ paddingBottom: "40px" ,position:"relative"}}>
      <img style={{position:"absolute",left:"0px",bottom:"100px"}} src={asset9} alt="" />
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "20px",
          }}
        >
          <Grid item xs={12} sm={5} md={2} lg={2}>
            <img src={client1} alt="" />
          </Grid>
          <Grid item xs={12} sm={5} md={2} lg={2}>
            <img src={client2} alt="" />
          </Grid>
          <Grid item xs={12} sm={5} md={2} lg={2}>
            <img src={client3} alt="" />
          </Grid>
          <Grid item xs={12} sm={5} md={2} lg={2}>
            <img src={client4} alt="" />
          </Grid>
          <Grid item xs={12} sm={5} md={2} lg={2}>
            <img src={client5} alt="" />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={6} lg={2}>
            <img src={client6} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={2}>
            <img src={client7} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={2}>
            <img src={client8} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={2}>
            <img src={client9} alt="" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Ourclients;
