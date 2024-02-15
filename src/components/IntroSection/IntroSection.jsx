import { Typography, Container, Box } from '@mui/material';

const IntroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("https://picsum.photos/1200/600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        py: 8,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Welcome to XYZ Law Firm
        </Typography>
        <Typography variant="h5"  paragraph sx={{ opacity: 0.8 }}>
          Providing expert legal solutions with a commitment to excellence.
        </Typography>
      </Container>
    </Box>
  );
};

export default IntroSection;
