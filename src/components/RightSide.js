import React from "react";
import { Box, Fab, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function RightSide() {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 5 },
        maxWidth: { xs: "100%", md: "250px", lg: "300px" },
        borderRadius: 8,
        backdropFilter: "blur(20px)",
        border: "1px solid #565656",
        position: { xs: "static", md: "fixed" },
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography color="white" sx={{ fontSize: "18px", fontWeight: "700" }}>
          Professiya:
        </Typography>
        <Typography color="white" sx={{ fontSize: "14px", fontWeight: "400" }}>
          Developer
        </Typography>
      </Stack>
      <Stack sx={{ mt: 3, mb: 5 }}>
        <img
          src="https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/me.jpg"
          alt="Me"
          style={{ width: "100%", borderRadius: "32px" }}
        />
      </Stack>
      <Typography
        color={"oq.main"}
        sx={{
          fontSize: "24px",
          fontWeight: "500",
          mb: 1,
          textAlign: "center",
        }}
      >
        Og'abek Dosumbetov
      </Typography>
      <Typography
        color={"oq.main"}
        sx={{
          fontSize: "18px",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        Based in Samarkand, Uzbekistan
      </Typography>

      <Stack
        sx={{
          mt: 10,
          mb: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fab
          color="success"
          size=""
          sx={{ mx: 0.7, boxShadow: "none" }}
          component="a"
          target="_blank"
          href="https://www.instagram.com/ogabekdosumbetov/"  
        >
          <InstagramIcon size="large" />
        </Fab>
        <Fab
          color="success"
          size=""
          sx={{ mx: 0.7, boxShadow: "none" }}
          component="a"
          target="_blank"
          href="https://www.linkedin.com/in/ogabek-dosumbetov-94084b1a6/"
        >
          <LinkedInIcon size="large" />
        </Fab>
        <Fab
          color="success"
          size=""
          sx={{ mx: 0.7, boxShadow: "none" }}
          component="a"
          target="_blank"
          href="https://t.me/django_web_dev"
        >
          <TelegramIcon size="large" />
        </Fab>
        <Fab
          color="success"
          size=""
          sx={{ mx: 0.7, boxShadow: "none" }}
          component="a"
          target="_blank"
          href="https://github.com/dosumbetov"
        >
          <GitHubIcon size="large" />
        </Fab>
      </Stack>

      <Fab
        color="success"
        variant="extended"
        component="a"
        href="tel:+998995774407"
        sx={{ width: "100%", boxShadow: "none", fontSize: "18px" }}
      >
        Call now
      </Fab>
    </Box>
  );
}
