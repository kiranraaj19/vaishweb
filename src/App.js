import React from 'react';
import { Flex } from '@chakra-ui/react'
import MainContent from './Components/MainContent'
import Sidebar from './Components/Sidebar'
import Name from './Components/Name'
import Footer from './Components/Footer'
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css"

function App() {
  return (
    <Router>
      <Flex h="80vh" w="100vw" className="container">
        <Name />
        <MainContent />
        <Sidebar
          Tabs={[
            { id: 1, title: "Home", link: "" },
            { id: 2, title: "About", link: "/about" },
            { id: 3, title: "Links", link: "/link" }
          ]}
        />
      </Flex>
      <Footer />
    </Router>
  );
}

export default App;
