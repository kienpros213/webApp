import React, { useState, useEffect } from 'react';
import PlaceByDetail from "../components/PlaceByDetail";
import {hcm} from '../components/image/imageList'
import { VStack } from '@chakra-ui/react';
import { Stack, Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

function PlaceDetail(){

    const [place, setPlace] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:8080/place/allPlaces')
        .then((response) => response.json())
        .then((data) => setPlace(data));
    })
        
    return(
        <Box bg = 'lime'>
            <Stack direction = 'row'>
                <VStack p={10} spacing={10} bg = 'tomato' display='flex' justifyContent='center' w='50%'>
                {place.map((item)=> (
                <PlaceByDetail key={item.id} img = {hcm} place = {item.placeName} number={item.location} />
                    )
                )
            }
                </VStack>
                <Stack pt={10} bg='tomato' w='50%'>
                    <Box bg='#5760de' h = '270px' w = '100%'>
                        lmao
                    </Box>
                    <Box bg = '#54556b' h = '270px' w = '100%'>
                        <Input/>
                        <Button colorScheme = 'facebook'>
                            lamo    
                        </Button>
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
