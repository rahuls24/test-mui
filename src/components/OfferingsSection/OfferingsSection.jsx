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

const products = [
  {
    id: 1,
    title: "PLAIN LAMINATED ROLLS",
    description:
      "Explore our high-quality plastic products in Plain Laminated Rolls. We offer custom-made rolls in 2 or 3 layers, tailored to your specific size and volume requirements. Our rolls are suitable for multipurpose packaging, making them perfect for startups.",
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    title: "FLEXIBLE PRINTED AND LAMINATED ROLLS",
    description:
      "Discover our innovative Printed and Laminated Rolls, featuring rotogravure printing & lamination for captivating designs. Custom-made to your specific design, size, and volume needs, our rolls are durable and leak-proof, suitable for various applications such as Chips, Namkeen, Spices, Seeds, and Fertilizers.",
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    title: "CENTER SEAL OR PILLOW POUCH",
    description:
      "Experience the versatility of Center Seal or Pillow Pouch packaging, ideal for powders, solids, and pastes up to 10 kgs. Our cost-effective pouches offer customizability, attractive packaging options, and greater brand appeal, making them perfect for a wide range of products.",
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    title: "THREE SIDE SEAL POUCH",
    description:
      "Discover the convenience of Three Side Seal Pouches, sealed on three sides with one side open for easy filling. Perfect for Snacks, Confectionery, Pharmaceuticals, and more, our pouches offer user-friendly, space-saving packaging solutions for startups.",
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    title: "CENTER SEAL WITH SIDE GUSSET POUCH",
    description:
      "Elevate your packaging with our Center Seal with Side Gusset Pouches, offering style and uniqueness. Available in a wide range of sizes, shapes, colors, and structures, these pouches are perfect for Tea, Coffee, Seeds, Pulses, and more.",
    image: "https://picsum.photos/200",
  },
  {
    id: 6,
    title: "STAND UP POUCH",
    description:
      "Embrace the versatility of Stand Up Pouches, ideal for light-weight products with their round bottom design. Our pouches offer customized shapes and sizes, portability, and complete protection of contents, making them perfect for a variety of products from edibles to pharmaceuticals.",
    image: "https://picsum.photos/200",
  },
  {
    id: 7,
    title: "VACUUM POUCH",
    description:
      "Keep your products fresh with our Vacuum Pouches, advanced packaging method for extended shelf life. Ideal for dry fruits, nuts, grains, and pulses, our pouches retain aroma, freshness, and flavor, ensuring the safety and quality of your products.",
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

  const handleLearnMoreClick = (product) => {
    console.log(`Learn More clicked for ${product.title}`);
    // Navigate to a different page or perform any other action
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 6 }} id="Offerings">
      <AnimatedTypography
        variant="h4"
        component="h2"
        gutterBottom
        style={springPropsHeading}
        sx={{ color: "inherit" }}
      >
        Our Products
      </AnimatedTypography>
      <Grid container spacing={3} justifyContent="center" ref={ref}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <AnimatedCard
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
              style={springPropsCard} // Use style prop for animation
            >
              <CardActionArea onClick={() => handleLearnMoreClick(product)}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ minHeight: 80 }}>
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => handleLearnMoreClick(product)}
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
