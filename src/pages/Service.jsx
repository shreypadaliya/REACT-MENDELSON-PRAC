import { Grid, Typography } from "@mui/material";
import React from "react";
import engvector from "../assets/images/Engagement vector 1.png";
import { Box } from "@mui/material";
import group30 from "../assets/images/Group 30.png";
import asset5 from "../assets/images/Asset 5 1.png";

const Service = () => {
  return (
    <>
      <Box id={"service"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "45px",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: "48px" }}>
          SERVICES
        </Typography>
        <img src={group30} alt="" />
      </Box>

      <Grid spacing={10} container sx={{ paddingTop: "20px" }}>
        <Grid item xs={12} sm={12} md={6} sx={{ position: "relative" }}>
          <img
            style={{ position: "absolute", left: "0px", bottom: "200px" }}
            src={asset5}
            alt=""
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", sm: "center", md: "end" },
              paddingRight: { xs: "0px", sm: "0px", md: "60px" },
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: "42px", paddingTop: "50px" }}
            >
              Engagement
            </Typography>
            <Typography
              variant="subtitle"
              sx={{
                fontSize: "16px",
                paddingTop: "15px",
                textAlign: { xs: "center", sm: "right" },
              }}
            >
              <Box sx={{ display: { xs: "inline", sm: "block" } }}>
                We love what we do and are driven by achieving great results for
                our
              </Box>
              <Box sx={{ display: { xs: "inline", sm: "block" } }}>
                clients. Our awards and impressive client list are testament to
                our high
              </Box>
              <Box sx={{ display: { xs: "inline", sm: "block" } }}>
                quality approach. We deliver value, creaKvity, results and
                excepKonal
              </Box>
              <Box sx={{ display: { xs: "inline", sm: "block" } }}>
                levels of customer service and professionalism. We specialise in
              </Box>
              <Box sx={{ display: { xs: "inline", sm: "block" } }}>
                infrastructure development, energy and natural resources.
              </Box>
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ paddingTop: { xs: "40px", sm: "40px", md: "0px" } }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "center", md: "left" },
              alignItems: "start",
              paddingleft: { xs: "0px", sm: "0px", md: "150px" },
            }}
          >
            <img src={engvector} className="engimg" alt="" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Service;
