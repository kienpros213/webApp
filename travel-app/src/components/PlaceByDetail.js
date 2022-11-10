import React from "react";
import {Box, Image,HStack} from '@chakra-ui/react';

function PlaceByDetail(props){
    return(
            <HStack
            spacing = {0}
            className="imgContainer"
            h='100%'
            w='35vw'
            borderRadius={10}
            overflow='hidden'>
                {/* Image */}
                <Image
                    id={props.id}
                    maxH={230}
                    maxW={300}
                    minH={230}
                    minW={300}
                    className = 'img'
                    src={props.img}
                    alt="lmao">
                </Image>
                {/* Text */}
                <Box
                fontSize='xl'
                id={props.id}
                h = '100%'
                w = '100%'
                bg='white'
                className = 'par'
                color='black' p={5}>
                    {props.place}<br/>
                    {props.number}
                </Box>
            </HStack>
    );
}

export default PlaceByDetail;