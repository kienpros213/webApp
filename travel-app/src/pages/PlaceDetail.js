import React, { useState, useEffect } from 'react';
import PlaceByDetail from "../components/PlaceByDetail";
import {hcm} from '../components/image/imageList'
import { VStack } from '@chakra-ui/react';
import { Stack, Box, Text } from '@chakra-ui/react';

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
                        <PlaceByDetail id = {item.id} img = {hcm} place = {item.placeName} number={item.id} />
                    )
                )
            }
                </VStack>

                <Stack pos='relative' spacing = '23%' bg='tomato' w='50%'>
                    <Box overflow='hidden' pos='fixed' borderRadius={10} bg='#5760de' h = '50%' w = '50vw'>
                        <Text overflowWrap='break-word' paddingY='10' paddingX='10' >{desc}</Text>  
                    </Box>
                    <Box overflow='hidden' p = {10} pos='fixed' borderRadius='0px 0px 10px 10px' bg = '#54556b' h = '50%' w = '50vw'>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}

export default PlaceDetail;
