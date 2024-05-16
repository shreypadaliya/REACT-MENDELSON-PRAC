import { Grid, Typography } from "@mui/material";
import React from "react";
import facilvector from "../assets/images/facilation vector 1.png";
import { Box } from "@mui/material";

const Facilitation = () => {
  return (
    <>
      <Grid container spacing={10} sx={{ paddingTop: "20px" }}>
        <Grid item xs={12} sm={12} md={6} sx={{ position: "relative" }}>
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
              facilitation
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
                {" "}
                We love what we do and are driven by achieving great results for
                our
              </Box>
              <Box sx={{ display: { xs: "inline", sm: "block" } }}>
                {" "}
                clients. Our awards and impressive client list are testament to
                our
              </Box>
              <Box sx={{ display: { xs: "inline", sm: "block" } }}>
                high quality approach. We deliver value, creaKvity, results and
              </Box>
              <Box sx={{ display: { xs: "inline", sm: "block" } }}>
                excepKonal levels of customer service and professionalism. We
              </Box>
              <Box sx={{ display: { xs: "inline", sm: "block" } }}>
                specialise in infrastructure development, energy and{" "}
              </Box>
              <Box sx={{ display: { xs: "inline", sm: "block" } }}>
                natural resources.
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
            <img src={facilvector} className="facilimg" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Facilitation;
