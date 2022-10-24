import React from "react";
import {Box, Image,HStack} from '@chakra-ui/react';

function PlaceByDetail(props){
    return(
            <HStack spacing = {0} className="imgContainer" h={200} w={600} borderRadius={10} overflow='hidden'>
                <Image id={props.id} maxH={230} maxW={300} className = 'img' src={props.img} alt="lmao"></Image>
                <Box id={props.id} h = '100%' w = '100%' bg='white' className = 'par' color='black' p={3}>
                    {props.place}<br/>
                    {props.number}
                </Box>
            </HStack>
    );
}

export default PlaceByDetail;