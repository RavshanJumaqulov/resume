import React from 'react'
import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";


export default function CredentialsBox() {
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
        }}
      >
        <Box sx={{ width: "100%" }}>
          <img
            src="https://wpriverthemes.com/landing/gridx-html/assets/images/sign.png"
            alt=""
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Typography
          color="oq"
          sx={{
            fontSize: "12px",
            textTransform: 'uppercase',
            mb: 1,
          }}
        >
          More about me
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
            Credentials
          </Typography>
          <AutoAwesomeIcon color="oq" />
        </Box>
      </Box>
    </Stack>
  )
}
