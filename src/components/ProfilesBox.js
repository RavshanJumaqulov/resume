import React from "react";
import { Fab, Typography, createSvgIcon } from "@mui/material";
import { Box, Stack } from "@mui/system";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TwitterIcon from "@mui/icons-material/Twitter";

const FacebookIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    , 'FacebookIcon'
  </svg>
);

const ThreadsIcon = createSvgIcon(
<svg shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 439.999 511.429"><path fill-rule="nonzero" d="M342.382 237.037a175.843 175.843 0 00-6.707-3.045c-3.947-72.737-43.692-114.379-110.428-114.805-38.505-.256-72.972 15.445-94.454 48.041l36.702 25.178c15.265-23.159 39.221-28.097 56.864-28.097.203 0 .408 0 .61.003 21.973.139 38.555 6.528 49.287 18.987 7.81 9.071 13.034 21.606 15.62 37.425-19.482-3.312-40.552-4.329-63.077-3.039-63.449 3.656-104.24 40.661-101.5 92.081 1.39 26.083 14.384 48.522 36.586 63.18 18.773 12.391 42.95 18.451 68.078 17.08 33.183-1.819 59.214-14.48 77.376-37.631 13.793-17.579 22.516-40.362 26.368-69.068 15.814 9.543 27.535 22.103 34.007 37.2 11.007 25.665 11.648 67.84-22.764 102.222-30.15 30.121-66.392 43.151-121.164 43.554-60.757-.45-106.707-19.934-136.582-57.914-27.976-35.563-42.434-86.93-42.973-152.675.539-65.745 14.997-117.113 42.973-152.675 29.875-37.979 75.824-57.464 136.581-57.914 61.197.455 107.948 20.033 138.967 58.195 15.21 18.713 26.677 42.248 34.236 69.688l43.011-11.476c-9.163-33.775-23.581-62.881-43.203-87.017C357.031 25.59 298.872.519 223.935 0h-.3C148.851.518 91.343 25.683 52.709 74.794 18.331 118.498.598 179.308.002 255.534l-.002.18.002.18c.596 76.226 18.329 137.037 52.707 180.741 38.634 49.11 96.142 74.277 170.926 74.794h.3c66.487-.462 113.352-17.868 151.96-56.442 50.511-50.463 48.991-113.717 32.342-152.548-11.944-27.847-34.716-50.464-65.855-65.402zm-114.795 107.93c-27.809 1.566-56.7-10.917-58.124-37.652-1.056-19.823 14.108-41.942 59.83-44.577 5.237-.302 10.375-.45 15.422-.45 16.609 0 32.146 1.613 46.272 4.702-5.268 65.798-36.173 76.483-63.4 77.977z"/></svg>)
export default function ProfilesBox() {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: 8,
        backdropFilter: "blur(20px)",
        maxHeight: "calc( 100% - 2px )",
        minHeight: "100%",
        flex: 1,
      }}
    >
      <Box
        sx={{
          borderRadius: 8,
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05))",
          p: { xs: 2, sm: 3, md: 4, lg: 4 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              p: { xs: 1, sm: 2 },
              mb: 2,
              width: "100%",
              maxWidth: "200px",
              display: "inline-flex",
              justifyContent: "space-between",
              background: "rgba(15,15,15, 0.25)",
              borderRadius: 8,
            }}
          >
            <Fab aria-label="FacebookIcon" size="medium" component='a' target="_blank" href="https://facebook.com/ogabek.dosumbetov.9/">
              <FacebookIcon />
            </Fab>
            <Fab aria-label="TwitterIcon" size="medium" component='a' target="_blank" href="https://www.threads.net/ogabekdosumbetov/">
              <ThreadsIcon />
            </Fab>
          </Box>
        </Box>
        <Stack>
          <Typography
            color="oq"
            sx={{
              fontSize: "12px",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Stay with me
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              color="oq.main"
              sx={{
                fontSize: "22px",
              }}
            >
              Profiles
            </Typography>
            <AutoAwesomeIcon color="oq" />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
