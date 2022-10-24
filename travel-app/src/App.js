import { ChakraProvider } from '@chakra-ui/react';
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import PlaceDetail from './pages/PlaceDetail';
import AddPlace from './pages/AddPlace';
import Test from './pages/Test';


function App() {
  return (
    <ChakraProvider>
      {/*Components*/}
      <NavBar/>
      {/*Router*/}
      <Routes>
        <Route path='/' element = {<MainPage/>} />
        <Route path='/placeDetail' element = {<PlaceDetail/>} />
        <Route path='/addPlace' element = {<AddPlace/>} />
        <Route path='/addPlace2' element = {<Test/>} />
      </Routes>
    </ChakraProvider>
  );

}
//<Search/>
//<SearchBy />


export default App;
