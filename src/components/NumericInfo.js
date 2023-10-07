import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import NumericBox from "./NumericBox";
import ProjectsBox from "./ProjectsBox";
import ProfilesBox from "./ProfilesBox";
import CredentialsBox from "./CredentialsBox";

export default function NumericInfo() {
  return (
    <Box sx={{ mt: 15, width: "100%", display: "flex", flexDirection: "row" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={9} md={12} lg={9} sx={{ p: 1 }}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 8,
              border: "1px solid #fff",
              p: { xs: 1, sm: 2, md: 3, lg: 4 },
              px: { xs: 0.5 },
              backdropFilter: "blur(20px)",
              justifyContent: "space-between",
              maxHeight: "calc( 100% - 2px )",
            }}
          >
            <NumericBox infoTitle="YEARS EXPERIENCE" numer="3" />
            <NumericBox infoTitle="CLIENTS WORLDWIDE" numer="10" />
            <NumericBox infoTitle="TOTAL PROJECTS" numer="15" />
          </Stack>
        </Grid>

        <Grid item xs={6} sm={3} md={6} lg={4} sx={{ p: 1 }}>
          <ProjectsBox />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={4} sx={{ p: 1 }}>
          <ProfilesBox />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={4}
          sx={{
            p: 1,
            display: { xs: "none", sm: "block", md: "none", lg: "block" },
          }}
        >
          <CredentialsBox />
        </Grid>
      </Grid>
    </Box>
  );
}
