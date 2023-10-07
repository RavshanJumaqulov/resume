import {
  Button,
  Chip,
  Grid,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";

export default function Resume({ steps }) {
  const [activeStep, setActiveStep] = useState(0);
  const stepperRef = useRef(true);
  steps = steps.sort();
  useEffect(() => {
    const h = window.innerHeight;
    window.addEventListener("scroll", () => {
      let t = stepperRef.current.getBoundingClientRect().top;
      if (h - t > h / 1.1) {
        setActiveStep(2);
      } else if (h - t > h / 1.8) {
        setActiveStep(1);
      } else if (h - t > 0) {
        setActiveStep(0);
      }

    });
  }, []);

  return (
    <Box sx={{ mt: { xs: 8, sm: 10, md: 15 } }}>
      <Chip
        sx={{ px: 2 }}
        variant="outlined"
        icon={<ContactPageOutlinedIcon sx={{ mr: 1 }} />}
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
              Education &{" "}
              <Typography
                component="span"
                color="success.main"
                sx={{ fontSize: "40px", fontWeight: "500", mb: 2 }}
              >
                Experience
              </Typography>
            </Typography>
            <Stepper
              activeStep={activeStep}
              ref={stepperRef}
              orientation="vertical"
              sx={{
                '& .MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {
                  color: 'success.main',
                  },
                '& .Mui-active': {
                color: 'success.main',
                },
                '& .Mui-completed': {
                  color: 'success.main',
                }
            }}
            >
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>
                    <Typography
                      color={activeStep === index ? "success.main" : "oq.light"}
                      sx={{ pl: 5, mt: 2, fontSize: "18px" }}
                    >
                      {step.label}
                    </Typography>
                  </StepLabel>
                  {step.description.map((el, index) => (
                    <StepContent key={index} sx={{'&.MuiStepConnector-line': {pb: 5}}}>
                      <Typography
                        color="oq.main"
                        sx={{ pl: 5, fontSize: "22px", fontWeight: "500", mb: 0.5 }}
                      >
                        {el.work}
                      </Typography>
                      <Typography
                        color="oq.light"
                        sx={{ pl: 5, fontSize: "14px", fontWeight: "400", mb: 2 }}
                      >
                        {el.company}
                      </Typography>
                    </StepContent>
                  ))}
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
