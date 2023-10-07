import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function SkillsBox({ img, title, piece }) {
  const skillsBoxRef = useRef(true);

  const [zero, setZero] = useState(0);
  const [skillsBoxTop, setSkillsBoxTop] = useState(100000);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSkillsBoxTop(skillsBoxRef.current.getBoundingClientRect().top);
    });
    window.addEventListener("resize", () => {
      setWindowHeight(window.innerHeight);
    });
  }, []);

  useEffect(() => {
    let interval;
    if (windowHeight - skillsBoxTop > 100) {
      if (zero < piece) {
        interval = setInterval(() => {
          setZero((zero) => zero + 1);
        }, 5);
      }
    } else if (windowHeight - skillsBoxTop < 0) {
      setZero(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [zero, skillsBoxTop, windowHeight]);

  return (
    <Grid
      item
      xs={6}
      xl={4}
      sx={{
        mb: 3,
        p: 1,
        "&:hover": {
          "& .MuiBox-root": {
            borderColor: "success.main",
            transform: 'scale(1.005)',
          },
          "& .MuiTypography-root": {
            color: "success.main",
          },
        },
      }}
    >
      <Box
        ref={skillsBoxRef}
        sx={{
          border: "1px solid #565656",
          borderRadius: 8,
          p: 3,
          transition: "0.3s",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img
            src={img}
            alt=""
            style={{ height: "40px", objectFit: "cover" }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "500",
            textAlign: "center",
            transition: "0.3s",
            cursor: "pointer",
          }}
          color="oq.main"
        >
          {zero} %
        </Typography>
      </Box>
      <Typography
        color="oq.main"
        sx={{
          mt: 1,
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "500",
          transition: "0.3s",
          cursor: "pointer",
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
}
