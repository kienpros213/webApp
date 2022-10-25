import { ChakraProvider } from '@chakra-ui/react';
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import AddPlace from './pages/AddPlace';
import PlaceList from './pages/PlaceList';


function App() {
  return (
    <ChakraProvider>
      {/*Components*/}
      {/*Router*/}
      <Routes>
        <Route path='/' element = {<MainPage/>} ></Route>
        <Route path='/placeDetail' element = {<PlaceList/>} />
        <Route path='/addPlace' element = {<AddPlace/>} />
      </Routes>
    </ChakraProvider>
  );

}
//<Search/>
//<SearchBy />


export default App;
