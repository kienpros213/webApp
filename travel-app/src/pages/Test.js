import React, { useState, useEffect } from 'react';
import PlaceByDetail from "../components/PlaceByDetail";
import {hcm} from '../components/image/imageList'
import { VStack } from '@chakra-ui/react';
import { Stack, Box } from '@chakra-ui/react';

function Test(){

    const [place, setPlace] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:8080/place/allPlaces')
        .then( (response) => response.json() )
        .then( (data) => setPlace(data) );
        }
    )

    function test(e){
        const placeId = e.target.id;
        console.log(placeId);

        let data = {id: placeId};

        fetch("http://localhost:8080/place/addPlace", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
        })
        .then(res => {console.log("Request complete! response:", res);})
        .then( (lmao) => console.log(lmao[0].id))

    }
        
    return(
        <Box bg = '#abadb0'>
            <Stack direction = 'row'>
                <VStack p={10} spacing={10} bg = '#abadb0' display='flex' justifyContent='center' w='50%'>
                {place.map((item)=> (
                    <a key={item.id} onClick = {test}>
                        <PlaceByDetail id = {item.id} img = {hcm} place = {item.placeName} number={item.id} />
                    </a>
                    )
                )
            }
                </VStack>
                <Stack pos='relative' pt={10} spacing = {310} bg='#abadb0' w='50%'>
                    <Box pos='fixed' borderRadius={10} bg='#5760de' h = '300px' w = '100%'>
                        lmao
                    </Box>
                    <Box pos='fixed' borderRadius={10} bg = '#54556b' h = '300px' w = '100%'>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Test;
