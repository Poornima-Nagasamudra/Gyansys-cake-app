import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementItem, incrementItem, removeFromCart } from '../Actions/cartAction';
import { Link ,  useParams, useLocation, useHistory} from 'react-router-dom';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import { Remove, Add, Delete } from '@mui/icons-material';
import Icon1 from '../../src/Images/Icon1.jpg'
import { styled } from '@mui/system';


const CartPage = ({match,  history}) => {
    // const productId = match.params.id;
    const { id: productId } = useParams();
    const location = useLocation();
    // const history = useHistory();

    const quantity = location.serach ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        if (productId) {
          dispatch(addToCart(productId, quantity));
        }
    }, [dispatch, productId, quantity]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
      };
    
      const checkoutHandler = () => {
        console.log('buy')
      };

      const CustomCard = styled(Card)({
        maxWidth: 345,
        margin: '20px auto',
    });
    
    const Media = styled(CardMedia)({
        height: 210,
    });

    return(
        // <div>
        //     <h1> Shopping cart</h1>

        //     {cartItems.length === 0 ? (
        //         <div>
        //             Your cart is empty <Link to="/products">Go Back </Link>
        //         </div>

        //     ) : (
        //         <div>
        //             {cartItems.map(ele => (
        //                 <div key={ele.product}>
        //                     <div>
        //                         <img src={ele.image} alt={ele.name} width="50" />
        //                     </div>
        //                     <div>
        //                         <Link to={`/product/${ele.product}`} > {ele.name}</Link>
        //                     </div>
        //                     <div> ${ele.price} </div>
        //                     {/* <div>
        //                         <input type="number" value={ele.quantity} 
        //                         onChange={(e) => dispatchEvent(addToCart(ele.product, Number(e.target.value))) } />
        //                     </div> */}

        //                     <div>
        //                         <button >-</button>
        //                         <p>{quantity}</p>
        //                         <button >+</button>
        //                     </div>

        //                     <div>
        //                         <button type="button"  onClick={() => removeFromCartHandler(ele.product)}>Remove </button>
        //                     </div>
        //                 </div>
        //             )) }

        //             <div>
        //                 <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
        //                 items  </h2>
        //                 $
        //                 {cartItems
        //                 .reduce((acc, item) => acc + item.quantity * item.price, 0)
        //                 .toFixed(2)}
        //             </div>
        //             <div>
        //                 <button
        //                 type='button'
        //                 onClick={checkoutHandler}
        //                 disabled={cartItems.length === 0}
        //                 >
        //                 Proceed To Checkout
        //                 </button>
        //             </div>

        //         </div>
        //     )}
        // </div>
 
         <Container  maxWidth="lg">
            <Typography variant="h4" component="h1" gutterBottom>
                Shopping Cart
            </Typography>

            
            {cartItems.length === 0 ? (
                <Typography  variant="h6">
                    Your cart is empty <Link to="/products"> Go Back </Link>
                </Typography>
            ) : (
                <Grid container spacing={2}>
                     <Grid  item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                                    items
                                </Typography>
                                <Typography variant="h6">
                                    $
                                    {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={checkoutHandler}
                                    disabled={cartItems.length === 0}
                                >
                                    Proceed To Buy ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid container spacing={3}>
                    {cartItems.map((item) => {
                        console.log('item', item)
                        return (
                        <Grid item xs={12} sm={6} md={4} key={item.product}>
                            <CustomCard>
                                <Grid container spacing={2}>
                                    <Grid item xs={2}>
                                        {/* <CardMedia component="img" image={item.Icon1} alt={item.name} style={{width: 50, height: 50}} /> */}
                                        <CardMedia  component="img" image={Icon1} title={item.name} style={{width: 50, height: 50}}  />

                                    </Grid>

                                    <Grid item xs={3}>
                                        <CardContent>
                                            <Typography  variant="body1">
                                                <Link to={`/product/${item.product}`}>
                                                {item.name}
                                                </Link>
                                            </Typography>
                                        </CardContent>
                                    </Grid>

                                    <Grid item xs={2}>
                                        <CardContent>
                                            <Typography variant="body1"> ${item.price} </Typography>
                                        </CardContent>
                                    </Grid>
{/* 
                                    <Grid item xs={2}>
                                        <CardContent>
                                            <Box display="flex" alignItems="center">
                                                <IconButton 
                                                onClick={() => dispatch(decrementItem(item.product, item.quantity - 1))} disabled={item.quantity === 1}>
                                                    <Remove />
                                                </IconButton>

                                                <Typography> {item.quantity} </Typography>

                                                <IconButton
                                                    onClick={() =>
                                                        dispatch(incrementItem(item.quantity + 1))
                                                        // console.log('increment', item.product, item.quantity + 1)

                                                    }

                                                >

                                                    <Add />
                                                </IconButton>
                                            </Box>
                                        </CardContent>
                                    </Grid> */}

                                    <Grid item xs={2}>
                                        <CardContent>
                                            <IconButton
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                <Delete />
                                            </IconButton>
                                        </CardContent>
                                    </Grid>

                                </Grid>
                            </CustomCard>
                        </Grid>
                        )
                    })}
                    </Grid>
                  
                   
                </Grid>
            )}
          
            
         </Container>
    );
};

export default CartPage;
