import {
  Backdrop,
  Box,
  Chip,
  Fab,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import NumericInfo from "./NumericInfo";
import Introduce from "./Introduce";
import About from "./About";
import Resume from "./Resume";
import Specializations from "./Specializations";
import Skills from "./Skills";
import Portfolio from "./Portfolio";

export default function LeftSide({
  newVolume,
  setNewVolume,
  steps,
  specializations,
  skills,
}) {
  const audioKey = new Audio("keyboard.mp3");

  const typerRef = useRef(true);
  const [typerTop, setTyperTop] = useState();
  const [typerBottom, setTyperBottom] = useState();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowHeight(window.innerHeight);
    });

    setTyperTop(typerRef.current.getBoundingClientRect().top);
    window.addEventListener("scroll", () => {
      setTyperTop(typerRef.current.getBoundingClientRect().top);
    });

    setTyperBottom(typerRef.current.getBoundingClientRect().bottom);
    window.addEventListener("scroll", () => {
      setTyperBottom(typerRef.current.getBoundingClientRect().bottom);
    });

    window.addEventListener("scroll", () => {
      if (newVolume != 0 && windowHeight >= typerTop && typerBottom > -199) {
        audioKey.play();
      }
    });
  }, []);

  const changeVolume = () => {
    newVolume == 0.001 ? setNewVolume(1) : setNewVolume(0.001);
  };

  const playSound = () => {
    if (newVolume == 1 && windowHeight >= typerTop && typerBottom > -199) {
      audioKey.play();
    } else {
      audioKey.pause();
    }
    audioKey.volume = newVolume;
  };
  console.log(
    newVolume != 0.001 &&
      windowHeight >= typerTop &&
      typerBottom < 0 &&
      typerBottom > -199,
    1+typerBottom / 200
  );

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc( 100vh - 70px )",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      {(newVolume != 0 && windowHeight >= typerTop && typerBottom > -199) ===
      true ? (
        <Fab
          variant={newVolume == 0 ? "outlined" : "contained"}
          color="success"
          onClick={changeVolume}
          sx={{
            position: "fixed",
            top: "100px",
            right: { xs: "10px", sm: "20px", md: "80px" },
            boxShadow: "none",
            fontFamily: "Inter, sans-serif",
            opacity: (windowHeight >= typerTop && typerBottom < 0 && typerBottom > -199) ? 1+typerBottom / 200 : 1
          }}
        >
          {newVolume === 0.001 ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </Fab>
      ) : (
        ""
      )}

      <Introduce
        playSound={playSound}
        typerRef={typerRef}
        typerTop={typerTop}
        typerBottom={typerBottom}
        windowHeight={windowHeight}
      />
      <About />
      <Resume steps={steps} />
      <Specializations specializations={specializations} />
      <Skills skills={skills} />
      <Portfolio />
    </Box>
  );
}
