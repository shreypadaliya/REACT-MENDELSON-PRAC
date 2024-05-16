import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import bg1 from "../assets/images/Group 1.png";
import asset4 from "../assets/images/Assets 4.png";

const Intro = () => {
  return (
    <>
    <Grid container spacing={2} sx={{ position: "relative",}}>
      <Grid item xs={12} sm={12} md={6}>
        <Box position="relative">
          <img src={bg1} className="introimg" alt="" />
        </Box>
        {/* style={{ width: "100%", display: "block" }} */}
      </Grid>

      <Grid item xs={12} sm={12} md={6} sx={{ marginTop: "50px" }}>
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "30px", sm: "30px", md: "56px" },
              fontWeight: 500,
              lineHeight: { xs: "40px", sm: "40px", md: "66px" },
            }}
          >
            Mendleson <br />
            Communication <br /> and Engagement
          </Typography>
          <Typography sx={{ fontSize: "18px", lineHeight: "21px" }}>
            <Box>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Box>
            <Box>Malesuada sed ipsum, ut quam volutpat, tortor.</Box>
          </Typography>
          <Box
            sx={{
              position: "absolute",
              bottom: "0px",
              right: "0px",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <img src={asset4} alt="" />
          </Box>
        </Box>
      </Grid>
    </Grid>
    </>
  );
};

export default Intro;
