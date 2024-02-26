import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const AnimatedCard = animated(Card);

const InfrastructureSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger animation when the section is 50% in view
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
  });

  return (
    <Box sx={{ pt: 2, pb: 6, mt: 4, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }} id="Infrastructure">
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
          Infrastructure
        </Typography>
        <Grid container spacing={3} justifyContent="center" ref={ref}>
          <Grid item xs={12} md={4}>
            <AnimatedCard
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              style={springProps}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Printing Facilities
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  8 Color (7 Reverse 1 Surface Printing Capacity) Rotogravure
                  Printing Machine
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="200"
                image="https://picsum.photos/300/200?random=1"
                alt="Printing Facilities"
              />
            </AnimatedCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <AnimatedCard
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              style={springProps}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Lamination Facilities
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Description of Lamination Facilities
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="200"
                image="https://picsum.photos/300/200?random=2"
                alt="Lamination Facilities"
              />
            </AnimatedCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <AnimatedCard
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              style={springProps}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Slitting and Pouch Making Facilities
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Description of Slitting and Pouch Making Facilities
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="200"
                image="https://picsum.photos/300/200?random=3"
                alt="Slitting and Pouch Making Facilities"
              />
            </AnimatedCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InfrastructureSection;
