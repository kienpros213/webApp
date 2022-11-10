import React from 'react';
import { Input, Box, Button, Stack } from '@chakra-ui/react';


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

        <>
            <Box bg = '#B9E0FF' h='100vh' display='flex' justifyContent = 'center' alignItems = 'center'>
                <Stack direction='column' bg = '#8D9EFF' borderRadius = {10} display = 'flex' justifyContent='center' p = {10} h='30vh' w='40vh'>
                    <Input bg='white' id = 'placeName' placeHolder = 'placeName' />
                    <Input bg='white' id = 'description' placeHolder = 'description' />
                    <Input bg='white' id = 'imgName' placeHolder = 'imgName' />

                    <Stack direction='row' display='flex' justifyContent = 'center' spacing = {10}>
                        <Button onClick = {addPlace} colorScheme = 'facebook'>add</Button>
                    </Stack> 
                </Stack>
            </Box>
        </>
        </Box>
    )
}


export default AddPlace;