import React from "react";
import {Stack} from '@chakra-ui/react';
import AddLocation from "../pages/AddLocation";
import AddPlace from "../pages/AddPlace";


function Add(){
    return(
        <Stack bg = '#8D9EFF' h = '100vh' display = 'flex' justifyContent = 'center' alignItems = 'center'>
            <AddPlace formColor = 'white' fontColor = 'black' boxColor = ' white'/>
            <AddLocation formColor = 'white' fontColor = 'black' boxColor = ' white'/>
        </Stack>
    )
}

export default Add;