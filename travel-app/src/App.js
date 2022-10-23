import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import SearchBy from './components/SearchBy';
import Test from './Test';


function App() {
  return (
    <ChakraProvider>
      <NavBar/>

    </ChakraProvider>
  );
}
//<Search/>
//<SearchBy />


export default App;
