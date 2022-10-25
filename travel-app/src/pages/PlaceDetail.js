import React, { useState, useEffect } from 'react';
import PlaceByDetail from "../components/PlaceByDetail";
import {hcm} from '../components/image/imageList'
import { VStack } from '@chakra-ui/react';
import { Stack, Box } from '@chakra-ui/react';

function PlaceDetail(){

    const [place, setPlace] = useState([]);

    useEffect( () => {
        fetch('http://localhost:8080/place/allPlaces')
        .then( (response) => response.json() )
        .then( (data) => setPlace(data) );
        }, []
    )

    const [desc, setDesc] = useState("lmao")
    function test(e){
        const placeId = e.target.id;
        fetch("http://localhost:8080/place/findPlace?id="+placeId+"")
        .then( (response) => response.json() )
        .then( (data) => setDesc(data.description) );
        }
           
    return(
        <Box bg = '#abadb0'>
            <Stack direction = 'row'>
                <VStack p={10} spacing={10} bg = '#abadb0' display='flex' justifyContent='center' w='50%'>
                {place.map((item)=> (
                    <a onClick={test} key={item.id}>
                        <PlaceByDetail id = {item.id} img = {hcm} place = {item.placeName} number={item.id} />
                    </a>
                    )
                )
            }
                </VStack>
                <Stack pos='relative' pt={10} spacing = {310} bg='#abadb0' w='50%'>
                    <Box pos='fixed' borderRadius={10} bg='#5760de' h = '300px' w = '100%'>
                        {desc}
                    </Box>
                    <Box pos='fixed' borderRadius={10} bg = '#54556b' h = '300px' w = '100%'>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}

export default PlaceDetail;
