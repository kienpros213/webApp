import React from "react";
import {VStack, Input, Heading, Button} from '@chakra-ui/react';

function Search(){
    return(
        <VStack pos='relative' maxH={400} className="searchContainer" h='400' bg='#A5F1E9' display='flex' justifyContent='center' overflow='hidden'>
            <Heading mb={100} pos='absolute' zIndex='6' > Cùng bạn khám phá </Heading>
            <Input id="searchBar" pos='absolute' zIndex='5' placeholder='Search' w={400} bg='fffff' />
            <img pos='absolute' className='bgImg' alt="lmao" src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' />
            <Button top={50} colorScheme='messenger' onClick={search}> search </Button>
        </VStack>
    );
}

function search(){
    //const searchContent = document.getElementById('searchBar');
    fetch('http://localhost:8080/product/allProduct')
    .then((response) => response.json())
    .then((data) => console.log(data[1].productName, data[0].productName))  
}

export default Search;