import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import facebook from "../assets/images/facebook 1.png";
import linkedin from "../assets/images/linkedin 1.png";
import google from "../assets/images/Group 20.png";
const Footer = () => {
  return (
    <>
      <Box id={"contactus"} sx={{ width: "85%", marginInline: "auto" }}>
        <Grid
          container
          sx={{
            backgroundColor: "#BFDBFF",
            display: "flex",
            justifyContent: "center",
            paddingTop: "40px",
            paddingBottom: "35px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "center", md: "start" },
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                paddingLeft: { xs: "0px", sm: "0px", md: "25px" },
              }}
            >
              Social
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <img src={facebook} alt="" />
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "31px" }}
              >
                Facebook
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <img src={linkedin} alt="" />
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "31px" }}
              >
                Linkedin
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <img src={google} alt="" />
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "31px" }}
              >
                Google +
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "center", md: "start" },
            }}
          >
            <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
              Explore
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "31px" }}
            >
              Services
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "31px" }}
            >
              Team
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "31px" }}
            >
              Clients
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "center", md: "start" },
            }}
          >
            <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
              Contact
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "31px" }}
            >
              Lorem Ipsum dummy address
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "31px" }}
            >
              used for display
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "31px" }}
            >
              1234567890
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            sx={{
              paddingLeft: { xs: "0px", sm: "0px", md: "0px", lg: "90px" },
              alignItems: { xs: "center", sm: "center", md: "start" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
              Email
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "31px" }}
            >
              mendlesoncommunication@email.com
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          fontSize: "14px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          padding: "20px",
        }}
      >
        © Copyright 2018 Mendleson Communication Pty Ltd{" "}
      </Box>
    </>
  );
};

export default Footer;
