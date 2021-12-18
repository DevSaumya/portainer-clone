import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="app-container">
      Hello
    </div>
    </ChakraProvider>
  );
}

export default App;
