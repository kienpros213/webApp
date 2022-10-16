import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import { ChakraProvider } from '@chakra-ui/react'
import SearchBy from './components/SearchBy';

function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <Search/>
      <SearchBy />
    </ChakraProvider>
  );
}

export default App;
