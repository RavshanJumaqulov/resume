import { Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function About() {
  return (
    <Box sx={{ mt: { xs: 8, sm: 10, md: 15 } }}>
      <Chip
        sx={{ px: 2 }}
        variant="outlined"
        icon={<PersonOutlineOutlinedIcon sx={{ mr: 1 }} />}
        color="oq"
        size="large"
        label="About"
      />
      <Box sx={{ mt: 5 }}>  
        <Grid container>
          <Grid item xs={12} md={10}>
            <Typography
              color="oq.main"
              sx={{ fontSize: "40px", fontWeight: "500", mb: 2 }}
            >
              Har bir yaxshi hikoya ajoyib voqeiyliklar bilan boshlanadi!
            </Typography>
            <Typography
              color="oq.light"
              sx={{ fontSize: "16px", fontWeight: "400", mb: 2 }}
            >
              Since beginning my journey as a freelance designer nearly 8 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my
              chopsone design problem at a time.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
