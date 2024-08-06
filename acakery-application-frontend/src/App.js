import { Box } from '@mui/material';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/Header';
import Header from './Components/Header';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      
       <Header />

       <Footer />

    </Box>
  );
}

export default App;
