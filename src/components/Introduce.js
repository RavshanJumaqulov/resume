import React from "react";
import {
  Box,
  Chip,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Typewriter } from "react-simple-typewriter";
import NumericInfo from "./NumericInfo";

export default function Introduce({
  typerRef,
  typerTop,
  typerBottom,
  windowHeight,
  playSound,
}) {
  return (
    <div>
      <Box>
        <Chip
          sx={{ px: 2 }}
          variant="outlined"
          icon={<HomeIcon sx={{ mr: 1 }} />}
          color="oq"
          size="large"
          label="Introduce"
        />
        <Box sx={{ mt: 5 }} ref={typerRef}>
          <Typography
            color="oq.main"
            sx={{
              fontSize: "40px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Hello, My name is
          </Typography>
          <Typography
            color="success.main"
            sx={{
              fontSize: "48px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Og'abek Dosumbetov
          </Typography>
          <Typography
            color="oq.main"
            sx={{
              fontSize: "40px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            I am{" "}
            <Typography
              component="span"
              color="success.main"
              sx={{
                fontSize: "40px",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              <Typewriter
                words={["Web Developer", "React Developer", "Django Developer", "Designer"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={200}
                deleteSpeed={50}
                delaySpeed={2000}
                onLoopDone={playSound}
                onType={playSound}
                onDelete={playSound}
              />
            </Typography>
          </Typography>
        </Box>

        <Typography sx={{ mt: 5, textAlign: "center" }}>
          Crack the code, change the world
        </Typography>
      </Box>

      <NumericInfo />
    </div>
  );
}
