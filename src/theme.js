import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#222d71", // Blue color from the logo
    },
    secondary: {
      main: "#ee2e32", // Red color from the logo
    },
    background: {
      default: "#ffffff", // White background
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // You can customize typography styles here
    color: "#000002", // Main text color
  },

  // You can customize other MUI components here
});

export default theme;
