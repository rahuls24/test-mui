import React, { useRef } from "react";
import { Container, Typography, Box } from "@mui/material";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AnimatedBox = animated(Box);

const testimonialsData = [
  {
    id: 1,
    author: "John Doe",
    position: "CEO, ABC Corporation",
    quote:
      "Working with XYZ Company has been a game-changer for our business. Their plastic export expertise and commitment to excellence are unmatched.",
  },
  {
    id: 2,
    author: "Jane Smith",
    position: "Founder, XYZ Startup",
    quote:
      "The plastic products from XYZ Company are of top-notch quality. They have been a reliable partner in our supply chain.",
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const springPropsHeading = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
  });

  const springPropsSlider = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
  });

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
    <AnimatedBox
      ref={ref}
      sx={{ backgroundColor: "#f4f4f4", py: 8, mt: 6 }}
      style={springPropsSlider}
    >
      <Container maxWidth="md">
        <animated.div style={springPropsHeading}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ textAlign: "center", mb: 4 }}
          >
            Customer Testimonials
          </Typography>
        </animated.div>

        <Box sx={{ textAlign: "center" }}>
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
        </Box>
      </Container>
    </AnimatedBox>
  );
};

export default TestimonialsSection;
