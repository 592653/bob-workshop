import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#caa6f8" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#FFFFFF">
        Prosjects
      </Typography>
      <Typography>
       Her skal det stå om prosjektene mine
      </Typography>
    </Box>
  );
}

export default Description;
