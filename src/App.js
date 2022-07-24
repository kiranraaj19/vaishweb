import React from 'react';
import { Flex,Box } from '@chakra-ui/react'
import MainContent from './Components/MainContent'
import Sidebar from './Components/Sidebar'
import Name from './Components/Name'
import Footer from './Components/Footer'
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css"

function App() {
  return (
    <Router>
      <Name />
      <Box w="100vw" className="container">   
        <MainContent />
        <Sidebar
          Tabs={[
            { id: 1, title: "Home", link: "" },
            { id: 3, title: "Contact", link: "/contact" }
          ]}
        />
      </Box>
      <Footer/>
    </Router>
  );
}

export default App;
