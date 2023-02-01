import React from "react";
import {Text, Image, Box} from "@chakra-ui/react";

function LocationDescription(props){
    return(
        <Box pl = {10} pt = {10}>
            <Text textAlign='center' fontSize='4xl'>
                {props.placeName}
            </Text>
            <Text textAlign='center' fontSize='3xl'>
                {props.locationName}
            </Text>
            <Text pt = {3} pr = {3}>
                {props.body}
            </Text>
            <Image src = {props.imageAddress} pr = {3}/>
        </Box>
        
    )
}

export default LocationDescription;