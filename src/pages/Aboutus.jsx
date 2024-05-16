import React from "react";
import pabout from "../assets/images/about us 1.png";
import { Box, Grid, Typography } from "@mui/material";
import group30 from "../assets/images/Group 30.png";
import engment from "../assets/images/Enagagement icon 1.png";
import communication from "../assets/images/coomunication icon 1.png";

const Aboutus = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "80px", marginBottom: "80px" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img className="pabout" src={pabout} alt="" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h4">ABOUT US</Typography>
            <img
              src={group30}
              alt=""
              style={{ display: "block", paddingBottom: "20px" }}
            />
            <Typography variant="p">
              <Box>
                We love what we do and are driven by achieving great results for
                our clients.
              </Box>
              <Box>
                Our awards and impressive client list are testament to our high
                quality
              </Box>
              <Box>
                approach. We deliver value, creaKvity, results and excepKonal
                levels of
              </Box>
              <Box>
                customer service and professionalism. We specialise in
                infrastructure
              </Box>
              <Box>development, energy and natural resources.</Box>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: "20px", gap: "20px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <img
                src={engment}
                alt=""
                style={{ height: "41px", width: "40px" }}
              />
              <Typography variant="h6" sx={{ fontSize: "24px" }}>
                Engagement
              </Typography>
              <Typography variant="subtitle" sx={{ fontSize: "18px" }}>
                <Box>We are engagement specialists,</Box>
                <Box> who have led projects at all</Box>
                levels of the IAP2 spectrum.
                <Box> READ MORE</Box>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <img
                src={communication}
                alt=""
                style={{ height: "41px", width: "40px" }}
              />
              <Typography variant="h6" sx={{ fontSize: "24px" }}>
                Communications
              </Typography>
              <Typography variant="subtitle" sx={{ fontSize: "18px" }}>
                <Box> We are award-winning leaders in</Box>
                <Box>communications and campaign</Box>
                <Box>management. READ MORE</Box>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Aboutus;
