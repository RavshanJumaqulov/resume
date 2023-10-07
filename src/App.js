import {
  Box,
  Container,
  Fab,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import RightSide from "./components/RightSide";
import LeftSide from "./components/LeftSide";
import { Fade } from "react-reveal";

const theme = createTheme({
  palette: {
    oq: {
      main: "#fff",
      light: "#c2c2c2",
      contrastText: "#fff",
    },
  },
});
let count = false;
function App() {
  const [newVolume, setNewVolume] = useState(0);
  const startVolume = () => {
    if (count === false) {
      setNewVolume(1);
      return (count = true);
    }
  };

  const [steps, setSteps] = useState([
    {
      label: "2020 - Present",
      description: [
        {
          work: "Framer Desinger & Developer",
          company: "Brunodee Agency",
        },
        {
          work: "Front-End WordPress Developer",
          company: "Envato Market",
        },
      ],
    },
    {
      label: "2013 - 2019",
      description: [
        {
          work: "Webflow Developer & Co-Founder",
          company: "Designflow Studio",
        },
        {
          work: "Web Designer",
          company: "Freelance",
        },
        {
          work: "Leader Team of Marketing",
          company: "AHA Marketing Agency",
        },
      ],
    },
    {
      label: "2010 - 2013",
      description: [
        {
          work: "Bachelor Degree of Information Technology",
          company: "US RMIT University",
        },
      ],
    },
  ]);

  const [specializations, setSpecializations] = useState([
    {
      id: 1,
      specialization: "website design",
      title: "I created digital products with unique ideas use Figma & Framer",
      projects: 24,
      icon: 'bi bi-bezier',
    },
    {
      id: 2,
      specialization: "development",
      title: "I build website go live with Framer, Webflow or WordPress",
      projects: 126,
      icon: 'bi bi-code-slash',
    },
    {
      id: 3,
      specialization: "SEO/Marketing",
      title: "Increase the traffic for your website with SEO optimized",
      projects: 8,
      icon: 'bi bi-rocket-takeoff',
    },
  ]);

  const [ skills, setSkills ] = useState([
    {
      title: 'Figma',
      img: 'https://wpriverthemes.com/drake/wp-content/uploads/2023/03/figma.png',
      piece: 92,
    },
    {
      title: 'Framer',
      img: 'https://wpriverthemes.com/drake/wp-content/uploads/2023/03/framer.png',
      piece: 85,
    },
    {
      title: 'WebFlow',
      img: 'https://wpriverthemes.com/drake/wp-content/uploads/2023/03/figma.png',
      piece: 80,
    },
    {
      title: 'React',
      img: 'https://wpriverthemes.com/drake/wp-content/uploads/2023/03/webflow.png',
      piece: 90,
    },
    {
      title: 'WordPress',
      img: 'https://wpriverthemes.com/drake/wp-content/uploads/2023/03/react.png',
      piece: 86,
    },
    {
      title: 'Laravel/PHP',
      img: 'https://wpriverthemes.com/drake/wp-content/uploads/2023/03/wordpress.png',
      piece: 76,
    },
  ])
  return (
    <ThemeProvider theme={theme}>
      <div className="App" onClick={startVolume}>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            background: "#1f1f1f",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: "-1",
          }}
        >
          <video
            muted
            autoPlay
            loop
            title="Advertisement"
            webkit-playsinline="true"
            playsInline
            src="https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/video3.mp4"
            type="video/mp4"
            style={{
              minWidth: "100%",
              maxHeight: "100vh",
              minHeight: "100vh",
              objectFit: "cover",
              opacity: 0.1,
            }}
          />
        </Box>
        <Box sx={{ my: 8 }}>
          <Container maxWidth="xl">
            <Grid container>
              <Grid
                item
                xs={12}
                md={5}
                lg={4}
                sx={{ p: { xs: 0, md: 1, lg: 2 } }}
              >
                <RightSide />
              </Grid>
              <Grid
                item
                xs={12}
                md={7}
                lg={8}
                sx={{ p: { xs: 0, md: 1, lg: 2 }, mt: { xs: 5, md: 0 } }}
              >
                <LeftSide
                  newVolume={newVolume}
                  setNewVolume={setNewVolume}
                  steps={steps}
                  specializations = {specializations}
                  skills={skills}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
