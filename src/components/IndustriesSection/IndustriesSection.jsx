import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";

const industries = [
  {
    title: "AGRICULTURAL PACKAGING",
    description:
      "As we all know India is generating the highest number of revenues from farming-related activities. Agricultural Pouches are our USP, helping manufacturers and exporters deliver seeds, fertilizers, pesticides, etc., in the handiest approach without any loss.",
    products: [
      "Seeds Pouch",
      "Fertilizer Pouch",
      "Pesticide Pouch",
      "Animal Neck Chain Pouch",
      "RETRO",
      "Ecolizer",
      "SINGAN",
      "Cattle Feed Pouches",
    ],
    image: "https://picsum.photos/200",
  },
  {
    title: "FOOD & BEVERAGE PACKAGING",
    description:
      "This segment of packaging has enormous requirements in the current scenario. It helps deliver fresh and healthy products to end-users. We offer customized packaging for different segments to make your products look more confident.",
    products: [
      "Dry fruits and Snacks Packaging",
      "Spices, Cereals and Pulses Packaging",
      "Coffee, Tea & Confectionery Packaging",
      "FMCG Pouch",
      "PET food Pouch",
      "Cheese & Paneer Pouch",
      "Ketchup Pouch",
      "Mamra Packaging Pouch",
      "Poha Packaging Pouch",
      "COLD BREW",
      "DIPAK",
      "Paneer",
      "Rasna",
    ],
    image: "https://picsum.photos/200",
  },
  {
    title: "PHARMACEUTICAL PACKAGING",
    description:
      "Pharmaceutical packaging plays an important role in providing protection to pharmaceutical products. We offer stand-up pouches and flat pouches with add-on features such as re-closable zippers, tear notches, ergonomic handles, rounded corners, and more.",
    products: [
      "Mask Pouch",
      "Packaging for Medical Equipment & Devices",
      "ORS Sachets",
      "ONE A",
      "foxtale",
    ],
    image: "https://picsum.photos/200",
  },
  {
    title: "PERSONAL & HOME CARE",
    description:
      "This segment demands more innovation in packaging material as it covers a wide range of consumer products. We offer a wide range of home care products packaging, including liquid or solid detergent pouches, shampoo & conditioner pouches, hand wash & dish wash pouches, and more.",
    products: [
      "Liquid or Solid Detergent pouch",
      "Shampoo & Conditioner Pouch",
      "Hand Wash & Dish Wash Pouch",
      "Mop Packaging Pouch",
      "Incense Sticks-Agarbatti Pouch",
    ],
    image: "https://picsum.photos/200",
  },
  {
    title: "INDUSTRIAL COMPONENT POUCH",
    description:
      "We offer innovative and creative packaging for industrial goods, considering factors like appearance, protection, and durability. Our packaging products can be made in several types of plastic pouches of various shapes and sizes according to our client's requirements.",
    products: [
      "Steel Wire Pouch",
      "Automobile oil Pouch",
      "Mobile Spare Parts Pouch",
    ],
    image: "https://picsum.photos/200",
  },
];

const IndustriesSection = () => {
  return (
    <Box sx={{ pt: 2, pb: 6, mt: 4, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          sx={{ mb: 4 }}
        >
          Industries We Serve
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {industries.map((industry, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={industry.image}
                  alt={industry.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    {industry.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "justify", mb: 2 }}
                  >
                    {industry.description}
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    <strong>Products:</strong>
                    <ul>
                      {industry.products.map((product, idx) => (
                        <li key={idx}>{product}</li>
                      ))}
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default IndustriesSection;
