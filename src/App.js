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
      <Flex w="100%" p="10px" direction={["column-reverse","column-reverse","column-reverse","row"]} className="container">   
        <MainContent />
        <Sidebar
          Tabs={[
            { id: 1, title: "Home", link: "" },
            { id: 3, title: "Contact", link: "/contact" }
          ]}
        />
      </Flex>
      <Footer/>
    </Router>
  );
}

export default App;
