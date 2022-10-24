import React, { useState, useEffect } from 'react';
import PlaceByDetail from "../components/PlaceByDetail";
import {hcm, hn, dn, h, qn, hp, nb, qb, nt} from '../components/image/imageList'
import { VStack } from '@chakra-ui/react';
import { Stack, Box } from '@chakra-ui/react';

function PlaceDetail(){

    const [place, setPlace] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:8080/place/allPlaces')
        .then((response) => response.json())
        .then((data) => setPlace(data));
    })

function test(e){
    console.log(e.target.id)
    console.log("lmao");
}
        
    return(
        <Box bg = '#abadb0'>
            <Stack direction = 'row'>
                <VStack p={10} spacing={10} bg = '#abadb0' display='flex' justifyContent='center' w='50%'>
                {place.map((item)=> (
                    <a key={item.id} onClick = {test}>
                        <PlaceByDetail img = {hcm} place = {item.placeName} number={item.id} />
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


/* {placeArray.map(({ imgName, placeName, numberName }) => (
     <PlaceByDetail className = 'lao' onClick = {updateContent} key={numberName} img = {imgName} place = {placeName} number={numberName} />
    ))} */

export default PlaceDetail;
