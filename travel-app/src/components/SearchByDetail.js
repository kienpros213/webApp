import React from "react";
import {Box, Image,Stack} from '@chakra-ui/react';

function SearchByDetail(props){
    return(
        <a href={props.link}>
            <Stack boxShadow='2xl' className="imgContainer" h={300} w={300} borderRadius={10} overflow='hidden'>
                <Image maxH={230} maxW={300} className = 'img' src={props.img}
                alt="lmao"></Image>
                <Box bg='white' className = 'par' color='black' p={3}>
                    {props.place}<br/>
                    {props.number}
                </Box>
            </Stack>
        </a>
    );
}

export default SearchByDetail;