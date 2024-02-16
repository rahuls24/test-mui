import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSpring, animated } from "react-spring";

const AnimatedBox = animated(Box);

const FooterContactForm = ({ onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (send data to backend, etc.)
    // Close the modal after submission
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <IconButton
        aria-label="close"
        onClick={onClose}
        style={{ position: "absolute", top: 5, right: 5 }}
      >
        <CloseIcon />
      </IconButton>

      <TextField
        required
        fullWidth
        id="name"
        label="Your Name"
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        fullWidth
        id="email"
        label="Your Email"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        multiline
        rows={4}
        id="message"
        label="Your Message"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Send
      </Button>
    </form>
  );
};

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactModalOpen = () => {
    setIsContactModalOpen(true);
  };

  const handleContactModalClose = () => {
    setIsContactModalOpen(false);
  };

  const springPropsFooter = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { mass: 1, tension: 180, friction: 12 },
  });

  return (
    <AnimatedBox
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
      id="Contact"
      style={springPropsFooter}
    >
      <Container maxWidth="md">
        <Typography variant="h6" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1" gutterBottom>
          Company's Address
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone: +1 (123) 456-7890
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: info@plastic-company.com
        </Typography>
      </Container>

      {/* Contact Us Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleContactModalOpen}
        sx={{ mt: 3 }}
      >
        Contact Us
      </Button>

      {/* Contact Us Modal */}
      <Dialog
        open={isContactModalOpen}
        onClose={handleContactModalClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <FooterContactForm onClose={handleContactModalClose} />
        </DialogContent>
      </Dialog>

      {/* Copyright */}
      <Typography variant="body2" color="text.secondary" mt={3}>
        {"Copyright © "}
        <Link color="inherit" href="https://plastic-company.com/">
          Your Plastic Company
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </AnimatedBox>
  );
};

export default Footer;
