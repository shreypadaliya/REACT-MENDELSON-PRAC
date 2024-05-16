import { Box } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import asset1 from "../assets/images/Asset 1.png";
import asset2 from "../assets/images/Asset 2.png";
import logo from "../assets/images/logo-1 1.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "100px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <img src={asset1} alt="" />
          </Box>
          <Box>
            <img src={logo} alt="" />
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              lineHeight: "70px",
              position: "absolute",
              right: "165px",
            }}
          >
            <ul
              style={{
                display: "flex",
                fontSize: "18px",
                listStyleType: "none",
                gap: "25px",
              }}
            >
              <li><a style={{color:"black",textDecoration:"none"}} href="#aboutus">AboutUs</a></li>
              <li><a style={{color:"black",textDecoration:"none"}} href="#service">service</a></li>
              <li><a style={{color:"black",textDecoration:"none"}} href="#team">Team</a></li>
              <li><a style={{color:"black",textDecoration:"none"}} href="#client">client</a></li>
              <li><a style={{color:"black",textDecoration:"none"}} href="#contactus">ContactUs</a></li>
            </ul>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <img src={asset2} alt="" />
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
              position: "fixed",
              right: "30px",
              top: "32px",
            }}
            onClick={toggleMenu}
          >
            <MenuIcon />
          </Box>
        </Box>
      </Box>
      {menuOpen && (
        <Box
          sx={{
            backgroundColor: "FFFFFF",
            width: "100%",
            display: { md: "none" },
          }}
        >
          <ul
            style={{
              display: "flex",
              fontSize: "18px",
              listStyleType: "none",
              gap: "25px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <li>About Us</li>
            <li>Services</li>
            <li>Team</li>
            <li>Client</li>
            <li>Contact Us</li>
          </ul>
        </Box>
      )}
    </>
  );
}

export default Navbar;
