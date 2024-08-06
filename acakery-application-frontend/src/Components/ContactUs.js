import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Box } from '@mui/material';

const Contact = () => {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = {name, email, message}
       axios.post('http://localhost:3555/api/contact', contact)
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    return(
        // <div>
        //     <h1> Contact Us</h1>
        //     <form onSubmit={handleSubmit}>
        //         <label>Name: </label>
        //         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        //         <label>Email: </label>
        //         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        //         <label>Message: </label>
        //         <textarea value={message} onChange={(e) => setMessage(e.target.value)} >  </textarea>
        //         <button type="submit">Send </button>
        //     </form>
     
        // </div>
        <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
            Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
            <Box mb={2}>
                <TextField   fullWidth       label="Name" value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                />
            </Box>
            <Box mb={2}>
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                />
            </Box>
            <Box mb={2}>
                <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    variant="outlined"
                />
            </Box>
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Send
            </Button>
        </form>
    </Container>
 
      
    );
};

export default Contact;