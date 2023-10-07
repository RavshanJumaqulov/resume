import { Box, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import SkillsBox from "./SkillsBox";

export default function Skills({skills}) {
  return (
    <Box sx={{ mt: { xs: 8, sm: 10, md: 15 } }}>
      <Chip
        sx={{ px: 2 }}
        variant="outlined"
        icon={<CategoryIcon sx={{ mr: 1 }} />}
        color="oq"
        size="large"
        label="My Skills"
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
                Advantages
              </Typography>
            </Typography>
          </Grid>
          {skills.map((el, index )=>{
            return(
                <SkillsBox key={index} img={el.img} title={el.title} piece={el.piece} />
            )
          })}
        </Grid>
      </Box>
    </Box>
  );
}
