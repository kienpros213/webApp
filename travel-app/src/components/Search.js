import React from "react";
import {VStack, Input, Heading, Button} from '@chakra-ui/react';

function Search(){
    return(
        <VStack pos='relative' maxH={400} className="searchContainer" h='400' bg='#A5F1E9' display='flex' justifyContent='center' overflow='hidden'>
            
            <Input id="searchBar" pos='absolute' zIndex='5' placeholder='Search' w={400} bg='fffff' />
            <img pos='absolute' className='bgImg' alt="lmao" src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'/>
            <Button top={50} colorScheme='messenger'> search </Button>
        </VStack>
    );
}
export default Search;

//<Heading mb={100} pos='absolute' zIndex='6' > Cùng bạn khám phá </Heading>