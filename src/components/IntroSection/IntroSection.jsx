import { Typography, Container, Box, useTheme } from "@mui/material";

const IntroSection = () => {
  const theme = useTheme(); // Accessing the provided MUI theme

  return (
    <Box
      sx={{
        backgroundImage: 'url("https://picsum.photos/1200/600")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: theme.palette.common.white, // Utilizing text color from the theme
        py: [6, 8], // Responsive padding
        textAlign: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://picsum.photos/1200/600")`, // Utilizing background color from the theme
          zIndex: 1, // Ensure the overlay is above the background image
        },
      }}
      id="Intro"
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            letterSpacing: "2px",
            marginTop: { xs: 4, md: 2 },
          }} // Adjusted margin for smaller screens
        >
          Joy Plastic & Packaging
        </Typography>
        <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
          Flexible Packaging for Modern Needs
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.8 }}>
          From humble beginnings in 2001 with a small flexible printed &
          laminated rolls and pouches manufacturing unit, Joy Plastic &
          Packaging has evolved into a modern setup specializing in flexible
          printed & laminated rolls and consumer packaging. Led by Mr. Hardik
          Dave, we are committed to delivering quality products to our customers
          across various sectors including FMCG, pharmaceuticals, seeds,
          fertilizer, spices, automobile, personal & homecare, and more.
        </Typography>
      </Container>
    </Box>
  );
};

export default IntroSection;
