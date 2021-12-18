import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import LeftPanel  from './components/LeftPanel'
function App() {
  return (
    <ChakraProvider>
    <div className="app-container">
      <LeftPanel children/>
    </div>
    </ChakraProvider>
  );
}

export default App;
