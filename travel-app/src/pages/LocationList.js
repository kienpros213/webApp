import {React, useState, useEffect} from "react";
import { Stack, Box} from "@chakra-ui/react";
import PlaceByDetail from '../components/PlaceByDetail'
import { useParams} from "react-router-dom";
import SortAccordion from "../components/SortAccordion";
import LocationDescription from "../components/LocationDescription";
import Map from "../components/Map"
function LocationList(){

    const [center, setCenter] = useState([19.806692,105.785179]);
    const {location} = useParams();
    const [content, setContent] = useState("");
    const [allPlace, setAllPlace] = useState([]);
    const [place, setPlace] = useState([]);

    //render place list
    useEffect( () => {
        fetch('http://localhost:8080/location/findLocation?placeName='+location+'')
        .then( (response) => response.json() )
        .then( (data) => setPlace(data) );
        }, [location]
    )

    //fetch location desctiption
    function fetchData(e){
        const locationId = e.target.id;
        fetch("http://localhost:8080/location/findLocationById/"+locationId+"")
        .then( (response) => response.json() )
        .then( (data) => setContent(data) );
        }
    
    //requery location
    const [placeName, setPlaceName] = useState({location})
    useEffect( () => {
        window.scrollTo(0, 0)
        fetch('http://localhost:8080/location/findLocation?placeName='+placeName+'')
        .then( (response) => response.json() )
        .then( (data) => setPlace(data) );
        },[placeName]
    )

    //place sort button
    useEffect( () => {
        fetch('http://localhost:8080/place/allPlaces')
        .then( (response) => response.json() )
        .then( (data) => setAllPlace(data) );
        }, []
    )

    return(
        <Stack pt = '7vh' bg = '#b6d1e3' direction='row' w = '100vw' h = '100vw'>
            {/* left */}
            <Stack pt={10} bg = '#b6d1e3' w = '50vw' h = '100vw'>
                <Stack bg = '#b6d1e3' direction='row' spacing = {5} display='flex' justifyContent = 'center'>             
                    <Stack dir="column" pt = {10} display='flex' alignItems= 'center'>
                        {/*Sort ComboBox */}
                        <SortAccordion allPlace={allPlace} setPlaceName = {()=>{setPlaceName(document.getElementById('placeName').value)}}/>
                    </Stack>
                    <Stack bg = '#b6d1e3' spacing = {5}>
                        {place.map((item)=> (
                            <Box key = {item.locationId} onClick={(e)=>{fetchData(e);setCenter([item.lat, item.lng])}}>
                                <PlaceByDetail id = {item.locationId} img = {item.imgName} place = {item.locationName} number={item.id} />
                            </Box>
                                )
                            )
                        }
                    </Stack>
                </Stack>
            </Stack>

            {/* right */}
                <Stack pt={10} direction='column' bg = '#b6d1e3' w = '50vw' h = '100vw' pos='fixed' left = '50vw'>
                    <Box boxShadow='dark-lg' overflow='hidden' overflowY= 'scroll' borderRadius='10px' bg = 'white' h='25%'>
                        <LocationDescription placeName = {content.placeName} locationName = {content.locationName} body = {content.description} imageAddress = {content.imgName} />
                    </Box>
                    <Box boxShadow='dark-lg' borderRadius='10px' bg = 'white' h='25%' >
                        <Map center = {[parseFloat(center[0]),parseFloat(center[1])]} />
                    </Box>
                </Stack>
        </Stack>
    );

}

export default LocationList;