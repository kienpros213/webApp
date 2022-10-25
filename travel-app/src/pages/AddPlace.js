import React from 'react';
import { Input, Box, Button } from '@chakra-ui/react';


function AddPlace(){

    function addPlace(){
        const placeName = document.getElementById('placeName').value;
        const description = document.getElementById('description').value;
        const imgName = document.getElementById('imgName').value;
        let data = {
            placeName: placeName,
            description: description,
            imgName: imgName
        };

        fetch("http://localhost:8080/place/addPlace", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
        }).then(res => {
        console.log("Request complete! response:", res);
        });

        console.log(placeName, imgName, description);

    }
    return(
        <Box>
            <Input id = 'placeName' placeHolder = 'placeName' />
            <Input id = 'description' placeHolder = 'description' />
            <Input id = 'imgName' placeHolder = 'imgName' />
            <Button onClick = {addPlace} colorScheme = 'facebook'>add</Button>
            <Button colorScheme = 'facebook'>search</Button>
        </Box>
    )
}


export default AddPlace;