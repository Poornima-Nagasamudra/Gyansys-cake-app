import React from 'react';
import Image1 from "../Images/Image1.webp"
import { Box, Container, Typography } from '@mui/material';

const Home = () => {

    return(
        <Box  sx={{
            height: '85vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'relative'
        }}>
            
            <Container  maxWidth="lg" sx={{ zIndex: 1 }}>
                <Typography variant="h2" component="h1" sx={{ mb: 8,   fontFamily: 'secondary', color: 'primary.main' }} >
                   Welcome to Our Cake Shop
                </Typography>
                <Typography variant="h4" component="h2" sx={{ mb:8, textTransform: 'uppercase', fontWeight: 'bold', color: 'brown' }}>
                  Find the best cakes for every occasion.
                </Typography>
                <img src={Image1}  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '81vh',
                    objectFit: 'cover',
                    zIndex: -1
                }} />
            </Container>

           
        </Box>
 
      
    );
};

export default Home;