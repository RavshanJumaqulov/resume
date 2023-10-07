import React from "react";
import { Box, Typography } from "@mui/material";

export default function NumericBox({ numer, infoTitle }) {
  return (
    <Box
      sx={{
        borderRadius: 8,
        background:
          "linear-gradient(120deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05))",
        p: { xs: 2, sm: 3, md: 4, lg: 4 },
        py: {xs: 3},
        mx: 1,
        display: 'block',
        minHeight: '100%'
      }}
    >
      <Typography
        color="oq.main"
        sx={{
          fontSize: { xs: "22px", sm: "25px", md: "28px", lg: "34px" },
          textAlign: "center",
          mb: 2,
        }}
      >
        {numer}+
      </Typography>
      <Typography
        color="oq.main"
        sx={{
          fontSize: { xs: "10px", sm: "10px", md: "11px", lg: "12px" },
          textAlign: "center",
        }}
      >
        {infoTitle}
      </Typography>
    </Box>
  );
}
