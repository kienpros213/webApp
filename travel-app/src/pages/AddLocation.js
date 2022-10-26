import React from "react";
import { Input, Box, Button } from '@chakra-ui/react';

function AddLocation(){

    function addLocation(){
        const placeName = document.getElementById('placeName').value;
        const locationName = document.getElementById('locationName').value;
        const description = document.getElementById('description').value;
        const imgName = document.getElementById('imgName').value;
        let data = {
            placeName : placeName,
            locationName: locationName,
            description: description,
            imgName: imgName
        };

        fetch("http://localhost:8080/location/addLocation", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
        }).then(res => {
        console.log("Request complete! response:", res);
        });

        console.log(locationName, imgName, description);
    }

    function search(){
        const placeName = document.getElementById('placeName').value;
        console.log(placeName)
        fetch("http://localhost:8080/location/findLocation?placeName="+placeName+"")
        .then( (response) => response.json() )
        .then( (data) => console.log(data) );
        }

    return(
        <Box>
            <Input id = 'placeName' placeHolder = 'placeName' />
            <Input id = 'locationName' placeHolder = 'locationName' />
            <Input id = 'description' placeHolder = 'description' />
            <Input id = 'imgName' placeHolder = 'imgName' />
            <Button onClick = {addLocation} colorScheme = 'facebook'>add</Button>
            <Button onClick={search} colorScheme = 'facebook'>search</Button>
        </Box>
    )

}

export default AddLocation;