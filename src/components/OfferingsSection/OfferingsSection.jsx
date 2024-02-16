import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const AnimatedTypography = animated(Typography);
const AnimatedCard = animated(Card);
const offeringsData = [
  {
    id: 1,
    title: "Category 1",
    description: "Explore our high-quality plastic products in Category 1.",
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    title: "Category 2",
    description: "Discover innovative plastic solutions in Category 2.",
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    title: "Category 3",
    description:
      "Customized plastic products tailored for your needs in Category 3.",
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    title: "Category 4",
    description:
      "Explore the latest trends in plastic manufacturing in Category 4.",
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    title: "Category 5",
    description:
      "Innovative plastic solutions for a sustainable future in Category 5. Innovative plastic solutions for a sustainable future in Category 5.",
    image: "https://picsum.photos/200",
  },
  {
    id: 6,
    title: "Category 6",
    description:
      "Discover versatile and durable plastic products in Category 6.",
    image: "https://picsum.photos/200",
  },
];

const OfferingsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const springPropsHeading = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    config: { mass: 1, tension: 180, friction: 12 },
  });

  const springPropsCard = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    config: { mass: 1, tension: 180, friction: 12 },
  });

  const handleLearnMoreClick = (offering) => {
    console.log(`Learn More clicked for ${offering.title}`);
    // Navigate to a different page or perform any other action
  };

  return (
    <Container
      maxWidth="md"
      sx={{ textAlign: "center", mt: 6 }}
      id={"Offerings"}
    >
      <AnimatedTypography
        variant="h4"
        component="h2"
        gutterBottom
        style={springPropsHeading}
      >
        Offerings
      </AnimatedTypography>
      <Grid container spacing={3} justifyContent="center" ref={ref}>
        {offeringsData.map((offering) => (
          <Grid item xs={12} sm={6} md={4} key={offering.id}>
            <AnimatedCard
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
              style={springPropsCard} // Use style prop for animation
            >
              <CardActionArea onClick={() => handleLearnMoreClick(offering)}>
                <img
                  src={offering.image}
                  alt={offering.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {offering.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {offering.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => handleLearnMoreClick(offering)}
                >
                  Learn More
                </Button>
              </CardActions>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OfferingsSection;
