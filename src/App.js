import React from 'react';
import { Flex } from '@chakra-ui/react'
import MainContent from './Components/MainContent'
import Sidebar from './Components/Sidebar'
import Name from './Components/Name'
function App() {
  return (
    <Flex h="80vh" w="80vw">
      <Name />
      <MainContent />
      <Sidebar 
      Tabs = {[
        {id:1, title: "Home", link: "/link"},
        {id:2, title: "About", link: "/link"},
        {id:3, title: "Links", link: "/link"}
      ]}
      />
    </Flex>
  );
}

export default App;
