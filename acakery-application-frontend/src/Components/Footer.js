import { AppBar, Box, Container, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'


const Footer = () => {

    return(
        <div>
             <Box py={2} style={{ backgroundColor: "#333",  color:"white",  bottom: 0, width: "100%",   position: "fixed", }}>
                <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Typography variant="body2" align="center">
                        &copy; 2023 Baker. All rights reserved. | Career | Terms | Privacy
                    </Typography>
                    </Grid>
                </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Footer