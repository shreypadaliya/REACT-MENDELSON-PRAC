import { Grid, Typography } from "@mui/material";
import React from "react";
import comvector from "../assets/images/Coominucation vector 1.png";
import { Box } from "@mui/material";
import asset6 from "../assets/images/Asset 6 1.png";

const Communications = () => {
  return (
    <>
      <Grid container spacing={10} sx={{ marginTop: "30px" }}>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "center", md: "right" },
              alignItems: { xs: "center", sm: "center", md: "end" },
              paddingRight: { xs: "0px", sm: "0px", md: "60px" },
            }}
          >
            <img className="comunicationimg" src={comvector} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ position: "relative" }}>
          <img
            style={{ position: "absolute", right: "0px", bottom: "-100px" }}
            src={asset6}
            alt=""
          />
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
              Communications
            </Typography>
            <Typography
              variant="subtitle"
              sx={{ fontSize: "16px", paddingTop: "15px" }}
            >
              <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Box>
              <Box>Faucibus quam quis egestas orci. Scelerisque eu, vitae</Box>
              <Box>sapien, pellentesque et. Sit ac fames facilisis nibh </Box>
              <Box>faucibus.</Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Communications;
