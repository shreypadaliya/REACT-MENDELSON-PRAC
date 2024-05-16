import { Box, Typography } from "@mui/material";
import React from "react";
import person1 from "../assets/images/Person 1 img 1.png";
import person2 from "../assets/images/Person 2 img 1.png";
import person3 from "../assets/images/Person 3 img 1.png";
import asset5 from "../assets/images/Asset 5 1.png";
import asset8 from "../assets/images/Asset 8 2.png";
import group30 from "../assets/images/Group 30.png";
import { Grid } from "@mui/material";

const Ourteam = () => {
  return (
    <>
      <Box id={"team"} sx={{ position: "relative" }}>
        <img
          style={{ position: "absolute", left: "0px", top: "-150px" }}
          src={asset5}
          alt=""
        />
        <Box
          display={"flex"}
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          <Typography variant="h4">OUR TEAM</Typography>
          <img src={group30} alt="" />
        </Box>
        <Grid
          container
          sx={{
            paddingTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={3}>
            <img src={person1} alt="" />
            <Typography sx={{ fontSize: "22px", fontWeight: 400 }}>
              Jessica D’suza
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <img src={person2} alt="" />
            <Typography sx={{ fontSize: "22px", fontWeight: 400 }}>
              Johny Williams
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <img src={person3} alt="" />
            <Typography sx={{ fontSize: "22px", fontWeight: 400 }}>
              Sanya R,
            </Typography>
          </Grid>
        </Grid>
        <img
          src={asset8}
          style={{ position: "absolute", right: "0px", top: "200px" }}
          alt=""
        />
      </Box>
    </>
  );
};

export default Ourteam;
