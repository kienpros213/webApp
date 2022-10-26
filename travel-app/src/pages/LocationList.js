import {React, useState, useEffect} from "react";
import { Stack, Box, Text, Divider, Input } from "@chakra-ui/react";
import PlaceByDetail from '../components/PlaceByDetail'
import RadioButton from "../components/RadioList";
import {hcm} from '../components/image/imageList'

function LocationList(){


    const [place, setPlace] = useState([]);

    useEffect( () => {
        fetch('http://localhost:8080/location/allLocation')
        .then( (response) => response.json() )
        .then( (data) => setPlace(data) );
        }, []
    )

    const [desc, setDesc] = useState("lmao")
    function fetchData(e){
        const placeId = e.target.id;
        fetch("http://localhost:8080/place/findPlace?id="+placeId+"")
        .then( (response) => response.json() )
        .then( (data) => setDesc(data.description) );
        }


    return(
        <Stack direction='row' bg = 'tomato' w = '100vw' h = '100vw'>
            {/* right */}
            <Stack bg = '#b6d1e3' w = '50vw' h = '100vw'>
                <Stack direction='row' spacing = {5} display='flex' justifyContent = 'center'>             
                    <Stack dir="column" pt = {10} display='flex' alignItems= 'center'>
                            <Text fontSize='3xl'> Bộ lọc </Text>
                            <Divider orientation='horizontal' />
                            <Input placeholder="Tìm theo điểm đến" bg = 'white'/>
                            <RadioButton sectionName = 'Theo vị trí'/>
                    </Stack>
                    <Stack>
                        {place.map((item)=> (
                            <a onClick={fetchData}>
                                <PlaceByDetail  id = {item.id} img = {hcm} place = {item.locationName} number={item.id} />
                            </a>
                                )
                            )
                        }
                    </Stack>
                </Stack>   
            </Stack>

            {/* left */}
            <Stack direction='column' bg = 'black' w = '50vw' h = '100vw'>
                <Box bg = '#3277e6' h='25%' >
                    <Text overflowWrap='break-word' fontSize='2xl' paddingY='10' paddingX='10'> {desc} </Text>
                </Box>
                <Box bg = '#e632b3' h='25%' ></Box>
            </Stack>
        </Stack>
    );

}

export default LocationList;