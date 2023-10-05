import React from "react";
import { Avatar, Typography, Stack } from "@mui/material";

function Profile() {
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      py={5}
      bgcolor="#caa6f8"
      borderRadius={3}
      boxShadow={3}
      spacing={2}
    >
      <Avatar
        src="/Pb.jpg"
        alt="Blomst"
        sx={{
          width: 200,
          height: 200,
          margin: "auto",
          border: "4px solid #FFFFFF",
        }}
      />
      <Typography variant="h4" gutterBottom color="#FFFFFF">
        Bodil Markhus
      </Typography>
    </Stack>
  );
}

export default Profile;
