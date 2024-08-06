import { Box, Container, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import aboutImage from "../Images/about-img.png"

const About = () => {

    const SectionTitle = styled(Box)(({ theme }) => ({
        textAlign: 'center',
        marginBottom: theme.spacing(5),
        paddingBottom: theme.spacing(3),
        maxWidth: 600,
        margin: '0 auto',
        position: 'relative'
      }));

      const ImageBox = styled(Box)(({ theme }) => ({
        minHeight: 400,
        position: 'relative',
        marginBottom: theme.spacing(5),
        [theme.breakpoints.up('lg')]: {
          marginBottom: 0,
        },
      }));

      const OverlayImage = styled('img')({
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      });
      

    return(
        <div>
            <Box>
                <Container>
                    <SectionTitle>
                        <Typography variant="h4" component="h2" color="primary" sx={{ fontFamily: 'secondary' }}>
                            About Us  
                        </Typography>
                        <Typography variant="h3" component="h1" sx={{ textTransform: 'uppercase' }}>
                            Welcome To CakeZone
                        </Typography>
                    </SectionTitle>
                     <Grid container spacing={5}>
                        <Grid item xs={8} lg={5}>
                            <ImageBox>
                                <OverlayImage src={aboutImage} alt="About us" />
                            </ImageBox>
                        </Grid>
                        <Grid  item xs={12} lg={6}>
                            <Typography variant="body1" paragraph>
                                Baked goods have been around for thousands of years. The art of baking was very popular 
                                during the Roman Empire. It was highly famous art as Roman citizens loved baked goods and 
                                demanded them frequently for important occasions such as feasts and weddings. 
                                Because of the fame of the art of baking, around 300 BC, baking was introduced as an
                                occupation and respectable profession for Romans. Bakers began to prepare bread at home in an oven, 
                                using grist mills to grind grain into flour for their breads. The demand for baked goods persisted, 
                                and the first bakers' guild was established in 168 BC in Rome. The desire for baked goods 
                                promoted baking throughout Europe and expanded into eastern parts of Asia. Bakers started 
                                baking bread and other goods at home and selling them on the streets.
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Learn more about our bakery and our passion for making delicious cakes.
                            </Typography>
                        </Grid>
                     </Grid>
                </Container>
            </Box>
        </div>
 
      
    );
};

export default About;