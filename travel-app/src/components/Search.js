import React from "react";
import {VStack, Input, Heading} from '@chakra-ui/react';

function Search(){
    return(
        <VStack className="searchContainer" h='400' bg='#A5F1E9' display='flex' justifyContent='center'>
            <Heading> Cùng bạn khám phá </Heading>
            <Input placeholder='Search' w={400} bg='fffff' />
        </VStack>
    );
}

export default Search;