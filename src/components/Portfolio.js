import React from "react";
import { Box, Chip, Grid, Typography } from "@mui/material";
import BallotIcon from '@mui/icons-material/Ballot';

export default function Portfolio() {
  return (
    <Box sx={{ mt: { xs: 8, sm: 10, md: 15 } }}>
      <Chip
        sx={{ px: 2 }}
        variant="outlined"
        icon={<BallotIcon sx={{ mr: 1 }} />}
        color="oq"
        size="large"
        label="Portfolio"
      />
      <Box sx={{ mt: 5 }}>
        <Grid container>
          <Grid item xs={12} md={10}>
            <Typography
              color="oq.main"
              sx={{ fontSize: "40px", fontWeight: "500", mb: 2 }}
            >
              Featured {" "}
              <Typography
                component="span"
                color="success.main"
                sx={{ fontSize: "40px", fontWeight: "500", mb: 2 }}
              >
                Projects
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
