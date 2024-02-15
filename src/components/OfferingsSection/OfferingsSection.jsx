
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from '@mui/material';

const offeringsData = [
  {
    id: 1,
    title: 'Personal Injury',
    description: 'Comprehensive legal support for personal injury cases.',
    image: 'https://picsum.photos/200',
  },
  {
    id: 2,
    title: 'Family Law',
    description: 'Guidance and representation in family law matters.',
    image: 'https://picsum.photos/200',
  },
  {
    id: 3,
    title: 'Business Law',
    description: 'Legal assistance for businesses and corporate matters.',
    image: 'https://picsum.photos/200',
  },
  {
    id: 4,
    title: 'Real Estate Law',
    description: 'Expertise in real estate transactions and disputes.',
    image: 'https://picsum.photos/200',
  },
  {
    id: 5,
    title: 'Criminal Defense',
    description: 'Defense representation for criminal charges and allegations.',
    image: 'https://picsum.photos/200',
  },
  {
    id: 6,
    title: 'Intellectual Property',
    description: 'Protecting and managing intellectual property rights.',
    image: 'https://picsum.photos/200',
  },
  {
    id: 7,
    title: 'Employment Law',
    description: 'Legal advice and representation for employment issues.',
    image: 'https://picsum.photos/200',
  },
];

const OfferingsSection = () => {
  const handleLearnMoreClick = (offering) => {
    // Navigate to a different page or perform any other action
    console.log(`Learn More clicked for ${offering.title}`);
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom>
      Practice Areas
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {offeringsData.map((offering) => (
          <Grid item xs={12} sm={6} md={4} key={offering.id}>
            <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardActionArea onClick={() => handleLearnMoreClick(offering)}>
                <img
                  src={offering.image}
                  alt={offering.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {offering.title}
                  </Typography>
                  <Typography color="text.secondary">{offering.description}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ marginTop: 'auto' }}>
                <Button size="small" onClick={() => handleLearnMoreClick(offering)}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OfferingsSection;
