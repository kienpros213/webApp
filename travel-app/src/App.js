import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <Search/>
    </ChakraProvider>
  );
}

export default App;
