import React from 'react';
import './App.css';
import {
  ChakraProvider,
  // Box,
  // Text,
  // Link,
  // VStack,
  // Code,
  // Grid,
  theme,
} from '@chakra-ui/react';

// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import { Home } from './pages/Home';
import {WomenPageBrand} from "./pages/WomenPageBrand"
import {Mens} from "./pages/Mens"


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
      {/* <WomenPageBrand/> */}
      {/* <Mens/> */}
    </ChakraProvider>
  );
}

export default App;
