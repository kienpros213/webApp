import React, { useState } from 'react';
import PlaceByDetail from "../components/PlaceByDetail";
import {hcm} from '../components/image/imageList'
import { VStack } from '@chakra-ui/react';
import { Stack, Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

const placeArray = [
    {imgName: hcm, placeName: 'Nhà thờ Đức Bà', numberName: '1'},
    {imgName: hcm, placeName: 'Dinh Độc Lập', numberName: '2'},
    {imgName: hcm, placeName: 'Chợ Bến Thành Quận 1', numberName: '3'},
    {imgName: hcm, placeName: 'Bưu điện Thành phố Hồ Chí Minh', numberName: '4'},
    {imgName: hcm, placeName: 'Landmark 81', numberName: '5'},
  ];

function PlaceDetail(){

    const [text, setText] = useState('adu');

    function updateContent(){
        fetch('http://localhost:8080/place/allPlaces')
        .then((response) => response.json())
        .then((data) => setText(data[0].placeName))
    }
    return(
        <Box bg = 'lime'>
            <Stack direction = 'row'>
                <VStack p={10} spacing={10} bg = 'tomato' display='flex' justifyContent='center' w='50%'>
                    {placeArray.map(({ imgName, placeName, numberName }) => (
                        <PlaceByDetail className = 'lao' onClick = {updateContent} key={numberName} img = {imgName} place = {placeName} number={numberName} />
                    ))}
                </VStack>

                <Stack pt={10} bg='tomato' w='50%'>
                    <Box bg='#5760de' h = '270px' w = '100%'>
                        lmao
                    </Box>
                    <Box bg = '#54556b' h = '270px' w = '100%'>
                        {text}
                        <Input/>
                        <Button colorScheme = 'facebook' onClick = {updateContent}>
                            lmao
                        </Button>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}


export default PlaceDetail;
