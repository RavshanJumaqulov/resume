import { Box, Chip, Grid, Typography, Stack } from "@mui/material";
import React from "react";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import SpecializationsBox from "./SpecializationsBox";

export default function Specializations({ specializations }) {
  return (
    <Box sx={{ mt: { xs: 8, sm: 10, md: 15 } }}>
      <Chip
        sx={{ px: 2 }}
        variant="outlined"
        icon={<ContactPageOutlinedIcon sx={{ mr: 1 }} />}
        color="oq"
        size="large"
        label="Services"
      />
      <Box sx={{ mt: 5 }}>
        <Grid container>
          <Grid item xs={12} md={10}>
            <Typography
              color="oq.main"
              sx={{ fontSize: "40px", fontWeight: "500", mb: 2 }}
            >
              My{" "}
              <Typography
                component="span"
                color="success.main"
                sx={{ fontSize: "40px", fontWeight: "500", mb: 4 }}
              >
                Specializations
              </Typography>
            </Typography>
          </Grid>
          {specializations.map((el) => {
            return(
                <SpecializationsBox
              key={el.id}
              specialization={el.specialization}
              title={el.title}
              icon={el.icon}
              projects={el.projects}
            />
            )
          })}
        </Grid>
      </Box>
    </Box>
  );
}
