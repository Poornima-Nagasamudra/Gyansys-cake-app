import React, { useEffect, useState } from 'react';
import Icon1 from '../../src/Images/Icon1.jpg'
import { startGetProducts } from '../Actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Actions/cartAction';
import {Button, Card, CardContent, CardMedia, CircularProgress, Grid, TextField, Typography} from '@mui/material'
import { styled } from '@mui/system';

// const Root = styled('div')({
//     flexGrow: 1,
//     padding: '20px',
// });

const CustomCard = styled(Card)({
    maxWidth: 345,
    margin: '20px auto',
});

const Media = styled(CardMedia)({
    height: 210,
});

// const Search = styled(TextField)({
//     marginBottom: '20px',
// });

// const Loader = styled('div')({
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
// });

const ProductPage = () => {
    const dispatch = useDispatch()
    // const classes = useStyles();


    const[search, setSearch] = useState('')
    const[loading, setLoading] = useState(false)

    const products = useSelector((state) =>{
        return state.product.data
    })
    
    useEffect(() =>{
        dispatch(startGetProducts())
        // setLoading(false)
    },[dispatch])

    const addToCartHandler = (id) => {
            dispatch(addToCart(id, 1));
            console.log("checking the id is the product" ,id )
    };

    const handleSearch = (e) => {
       setSearch(e.target.value.toLowerCase())
    }

    const filterProducts = products.filter(product =>
        product.name.toLowerCase().includes(search)
     ) 
    

    return(
        <div  >
            <Typography variant="h2" gutterBottom>
                Our cakes
            </Typography>

            <TextField type="search" value={search} placeholder='search here ...' halfWidth onChange={handleSearch} />

            {loading ? (
               <p> items is not there </p>
                // <Loader>
                //     <CircularProgress />
                // </Loader>
            ) : ( 
            <Grid container spacing={3}>
                {filterProducts.map((product) => {
                    return(
                    <Grid  item xs={12} sm={6} md={4}  key={product._id}> 
                        <CustomCard>
                            {/* <img src={Icon1} alt={product.name} /> */}
                            <Media image={Icon1} title={product.name} />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Name :{product.name}
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    Description:  {product.description} 
                                </Typography>
                                <Typography variant="body2" color="textPrimary" component="p">
                                    Price: {product.price}
                                </Typography>
                                <Button  variant="contained" color="primary" onClick={() => addToCartHandler(product._id)}>
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </CustomCard>    
                    </Grid>)
                })}
            </Grid>
            ) }
     
        </div>
 
      
    );
};

export default ProductPage;