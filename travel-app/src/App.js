import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import { ChakraProvider } from '@chakra-ui/react'
import SearchByDetail from './components/SearchByDetail';

function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <Search/>
      <SearchByDetail place = 'Thành phố Hồ Chí Minh' number='31 địa điểm' />
    </ChakraProvider>
  );
}

export default App;
