import React from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './ContactUs'
import {AppBar, Button, Container, Toolbar, Typography} from '@mui/material'
import Footer from './Footer'
import OrderPage from './Oders'
import CartPage from './CartPage'
import ProductPage from './Product'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
    return (
        <div>
               <AppBar  position="static" style={{ backgroundColor: "#333" }}>
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                        <span style={{float: 'left'}}>Get App </span> 

                        <div style={{float: 'right'}}>
                            <Button color="inherit" component={Link} to="/">Home</Button>
                            <Button color="inherit" component={Link} to="/about">About</Button>
                            <Button color="inherit" component={Link} to="/products">Products</Button>
                            <Button color="inherit" component={Link} to="/contactus">Contact US</Button>
                            <Button color="inherit" component={Link} to="/order">Orders</Button>
                            <Button color="inherit" component={Link} to="/cart">  <ShoppingCartIcon /> </Button>
                        </div>
                        
                        </Typography>
                    </Toolbar>
               </AppBar>
                
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<ProductPage />} />
                        <Route path="/contactus" element={<Contact />} />
                        <Route path="/order" element={<OrderPage />} />
                        <Route path="/cart/:id?" element={<CartPage />} />
                    </Routes>
                </Container>

                
        </div>
    )
}

export default Header
