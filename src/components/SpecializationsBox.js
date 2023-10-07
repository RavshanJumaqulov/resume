import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { createSvgIcon } from "@mui/material/utils";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function SpecializationsBox({
  specialization,
  icon,
  title,
  projects,
}) {
  return (
    <Grid item xs={12} md={10}>
      <Box
        color="success"
        sx={{
          border: "1px solid #565656",
          borderRadius: 8,
          transition: ".3s",
          padding: "44px 48px 41px 48px",
          mb: 2,
          ml: "3px",
          "&:hover": {
            borderColor: "success.main",
            transform: "scale(1.005)",
            "& .bi": {
              color: "success.main",
            },
          },
        }}
      >
        <Stack
          sx={{
            mb: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            color="oq.main"
            sx={{
              fontSize: "24px",
              fontWeight: "400",
              textTransform: "capitalize",
            }}
          >
            {specialization}
          </Typography>
          <Typography
            className={icon}
            sx={{ fontSize: "30px", transition: "0.3s" }}
          />
        </Stack>
        <Typography
          color="oq.light"
          sx={{ mb: 4, fontSize: "14px", fontWeight: "400" }}
        >
          {title}
        </Typography>
        <Typography
          color="oq.main"
          sx={{
            fontSize: "12px",
            fontWeight: "400",
            textTransform: "uppercase",
            transition: "0.3s",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {projects} pROJECTS
        </Typography>
      </Box>
    </Grid>
  );
}
