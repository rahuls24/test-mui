import { Container, Typography, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    id: 1,
    author: "John Doe",
    position: "CEO, ABC Corporation",
    quote:
      "Working with XYZ Law Firm has been a game-changer for our business. Their legal expertise and commitment to excellence are unmatched.",
  },
  {
    id: 2,
    author: "Jane Smith",
    position: "Founder, XYZ Startup",
    quote:
      "The legal team at XYZ Law Firm is not just professional but also genuinely cares about their clients. They guided us through every legal aspect with precision.",
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        py: 8,
        px: { xs: 2, md: 0 },
        mt: 6,
        overflow: "hidden",
      }}
      id="Testimonials"
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", mb: 4 }}
        >
          What Our Clients Say
        </Typography>
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <Box key={testimonial.id} sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 500, mb: 1 }}
              >
                {testimonial.quote}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ fontStyle: "italic", mb: 2 }}
              >
                {testimonial.author}, {testimonial.position}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
