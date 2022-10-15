import React from "react";
import {Box, Input, Heading} from '@chakra-ui/react';

function Search(){
    return(
        <Box className="searchContainer" bg='#dbdbdb' height="350" align="center">
            <Heading mt='50'> Cùng bạn khám phá </Heading>
            <Input placeholder='Search' w={400} mt='30' bg='fffff' />
        </Box>
    );
}

export default Search;