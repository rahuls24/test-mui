import { Typography, Container, Box } from "@mui/material";

const IntroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("https://picsum.photos/1200/600")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
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
          background: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
        },
      }}
      id="Intro"
    >
      <Container maxWidth="md">
        <Typography
          variant="h3" // Adjusted font size for smaller screens
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, letterSpacing: "2px", marginTop: 4 }}
        >
          Welcome to XYZ Company
        </Typography>
        <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
          Your Tagline Here
        </Typography>
      </Container>
    </Box>
  );
};

export default IntroSection;
