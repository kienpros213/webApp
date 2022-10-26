import React from "react";
import {Text, Image,Stack} from '@chakra-ui/react';

function Place(props){
    return(
        <Stack
            as = 'a'
            href = '/placeDetail'
            className="imgContainer"
            borderRadius={10}
            overflow='hidden'
            h={props.h}
            w={props.w}
            display='flex'
            justifyContent = 'flex-end'
        >
                <Image
                    className="img"
                    borderRadius={10}
                    maxH={props.h}
                    maxW = {props.w}
                    src = {props.imgName}
                />
                <Text
                    boxShadow='2xl'
                    borderRadius='0px 0px 10px 10px'
                    backdropFilter='auto'
                    backdropBlur='8px'
                    className="par"
                    pl={5} pb={5}
                    pos='absolute'
                    color='white'
                    fontFamily='MaduraiExtraBold'
                    w = {props.w}
                    > 
                        {props.placeName}
                </Text>
        </Stack>
    );
}

export default Place;