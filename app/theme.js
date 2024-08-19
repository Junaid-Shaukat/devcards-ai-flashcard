"use client";
import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#003300",  // Dark Green
      secondary: "#E9E6DD", // Light Green or Neutral
    },
    greenTheme: {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      950: "#003300",  // Darkest Green
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: {
      fontSize: "3.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2.5rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.3rem",
    },
    h5: {},
    h6: {},
    p: {
      color: "#2c2c2c",
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          backgroundColor: theme.palette.greenTheme[50],
        },
        "::-webkit-scroll-behavior": {
          scrollbarBehavior: "smooth",
        },
        "::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#9fa1ad",
          borderRadius: "10px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#5b5d6a",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#e7e7ec",
        },
      }),
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#003300",  // Dark Green
          color: "#E9E6DD",
          borderRadius: 2,
          "&:hover": {
            backgroundColor: "#004d00",  // Slightly lighter dark green
            color: "#fafafa",
          },
          "&:disabled": {
            backgroundColor: "#003300",
            color: "rgba(255,255,255,0.5)",
          },
        },
        text: {
          fontSize: "1rem",
          fontWeight: 500,
          textTransform: "none",
          color: "#e9e6dd",
          "&:hover": {
            color: "#fff",
            backgroundColor: "rgba(255,255,255, 0.1)",
          },
        },
        outlined: {
          backgroundColor: "transparent",
          color: "#003300",
          border: "1px solid #003300",
          borderRadius: 2,
          "&:hover": {
            backgroundColor: "#003300",
            color: "#e9e6dd",
            borderColor: "#004d00",
          },
        },
      },
    },
  },
});

export default theme;

/*
#e8f5e9  (232,245,233)
#c8e6c9  (200,230,201)
#a5d6a7  (165,214,167)
#81c784  (129,199,132)
#66bb6a  (102,187,106)
#4caf50  (76,175,80)
#43a047  (67,160,71)
#388e3c  (56,142,60)
#2e7d32  (46,125,50)
#1b5e20  (27,94,32)

#E9E6DD
#003300
*/
