import React from "react";
import { Avatar, Typography, Stack } from "@mui/material";

function Profile() {
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      py={5}
      bgcolor="#fdf9fd"
      borderRadius={3}
      boxShadow={3}
      spacing={2}
    >
      <Avatar
        src="/Profilbilde bunad 2.jpg"
        alt="Blomst"
        sx={{
          width: 150,
          height: 150,
          margin: "auto",
          border: "4px solid #ddbce6",
        }}
      />
      <Typography variant="h4" gutterBottom color="#ee2925">
        Bodil Markhus
      </Typography>
    </Stack>
  );
}

export default Profile;
