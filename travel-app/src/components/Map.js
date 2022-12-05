import {React} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

function Map(props){

  return (
    <>
      <LoadScript
        googleMapsApiKey="AIzaSyDq22uth2dwpQKoLdYZ6Ib1wWG_0OqufQE"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{lat: props.center[0], lng: props.center[1]}}
          zoom={10}
        >
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default Map
