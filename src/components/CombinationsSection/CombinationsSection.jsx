import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const combinations = [
  {
    title: "Polyester + LDPE",
    description: "Combination of Polyester and LDPE materials",
  },
  {
    title: "Polyester + Metallized Polyester + LDPE",
    description:
      "Combination of Polyester, Metallized Polyester, and LDPE materials",
  },
  {
    title: "Polyester + Holographic Film + LDPE",
    description:
      "Combination of Polyester, Holographic Film, and LDPE materials",
  },
  {
    title: "Polyester + Aluminium foil + LDPE",
    description: "Combination of Polyester, Aluminium foil, and LDPE materials",
  },
  {
    title: "Polyester + Polyester + LDPE",
    description: "Combination of two layers of Polyester and LDPE materials",
  },
  {
    title: "B.O.PP. + LDPE",
    description: "Combination of B.O.PP. and LDPE materials",
  },
  {
    title: "B.O.P.P + Metallized Polyester + LDPE",
    description:
      "Combination of B.O.PP., Metallized Polyester, and LDPE materials",
  },
  {
    title: "B.O.P.P. + Holographic Film + LDPE",
    description: "Combination of B.O.PP., Holographic Film, and LDPE materials",
  },
  {
    title: "Many More",
    description: "Explore additional combinations as per your requirements",
  },
];

const AnimatedCard = animated(Card);

const CombinationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger animation when the section is 50% in view
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
  });

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
        Combinations We Offer
      </Typography>
      <Grid container spacing={3} justifyContent="center" ref={ref}>
        {combinations.map((combination, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
                  {combination.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {combination.description}
                </Typography>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CombinationsSection;
