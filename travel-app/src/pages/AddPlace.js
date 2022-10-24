import React from 'react';
import { Input, Box, Button } from '@chakra-ui/react';


function AddPlace(){

    function addPlace(){
        const placeName = document.getElementById('placeName').value;
        const description = document.getElementById('desc').value;
        const location = document.getElementById('location').value;
        let data = {
            placeName: placeName,
            description: description,
            location: location
        };

        fetch("http://localhost:8080/place/addPlace", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
        }).then(res => {
        console.log("Request complete! response:", res);
        });

        console.log(placeName, location, description);

    }

    function findPlace(){
        const placeName = document.getElementById('placeName').value;
        const description = document.getElementById('desc').value;
        const location = document.getElementById('location').value;
        let data = {
            placeName: placeName,
            description: description,
            location: location
        };

        fetch("http://localhost:8080/place/allPlaces", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => console.log(data));


    }
    return(
        <Box>
            <Input id = 'placeName' placeHolder = 'place name' />
            <Input id = 'desc' placeHolder = 'description' />
            <Input id = 'location' placeHolder = 'location' />
            <Button onClick = {addPlace} colorScheme = 'facebook'>add</Button>
            <Button onClick = {findPlace} colorScheme = 'facebook'>search</Button>
        </Box>
    )
}


export default AddPlace;