import React from 'react';
import { Input, Box, Button } from '@chakra-ui/react';


function AddPlace(){

    
function addPlace(){
    const placeName = document.getElementById('placeName').value;
    const description = document.getElementById('desc').value;
    const location = document.getElementById('location').value;
    // POST request using fetch()
    let data = {
        placeName: {placeName},
        description: {description},
        location: {location}
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

function searchPlace(){
    const placeNameText = document.getElementById('placeName').value;
    const data = { placeName: placeNameText };
    console.log("this is",placeNameText," ")
    fetch("http://localhost:8080/place/allPlaces", {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(placeNameText),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
}

    return(
        <Box>
            <Input id = 'placeName' placeHolder = 'place name' />
            <Input id = 'desc' placeHolder = 'description' />
            <Input id = 'location' placeHolder = 'location' />
            <Button onClick = {addPlace} colorScheme = 'facebook'>add</Button>
            <Button onClick = {searchPlace} colorScheme = 'facebook'>search</Button>
        </Box>
    )
}


export default AddPlace;