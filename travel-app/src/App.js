import { ChakraProvider} from '@chakra-ui/react';
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import AddPlace from './pages/AddPlace';
import LocationList from './pages/LocationList';
import AddLocation from './pages/AddLocation';
import Example from './Test';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <ChakraProvider>
      {/*Components*/}
      {/*Router*/}
      <Routes>
        <Route path='/' element = {<MainPage/>} ></Route>
        <Route path='/locationList/:location' element = {<LocationList/>} />
        <Route path='/addPlace' element = {<AddPlace/>} />
        <Route path='/addLocation' element = {<AddLocation/>} />
        <Route path='/adminPage' element = {<AdminPage/>} />
      </Routes>
    </ChakraProvider>
  );
}



export default App;
