import React from "react";
import { Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box py={5} bgcolor="#caa6f8" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#FFFFFF">
        Attributes
      </Typography>
      <Typography>
      "https://www.flaticon.com/free-icons/kitty"  Kitty icons created by Boris farias - Flaticon
      </Typography>
    </Box>
  );
}

export default Footer;