import React from "react";
import { Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#d11410">
        Om Meg
      </Typography>
      <Typography>
        hei
      </Typography>
    </Box>
  );
}

export default Footer;