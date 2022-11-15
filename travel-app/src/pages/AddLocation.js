import React from "react";
import { Input, Box, Button, Stack, useToast } from '@chakra-ui/react';

function AddLocation(){



    const toast = useToast()

    function check(){
            const placeName = document.getElementById('placeName').value;
            const locationName = document.getElementById('locationName').value;
            const description = document.getElementById('description').value;
            const imgName = document.getElementById('imgName').value;

            if (placeName === null || placeName === "", locationName === null || locationName === "", description === null || description === "", imgName === null || imgName === "") {
                return(
                    toast({
                        title: 'Thông báo',
                        description: "điền đầy đủ đi 😥",
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                    })
                )
            }
            else{
                toast({
                    title: 'Thông báo',
                    description: "thank you 🤡",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })

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
            
    }

    return(
        <>
            <Box pt={10} bg = '#B9E0FF' h='100vh' display='flex' justifyContent = 'center' alignItems = 'center'>
                <Stack direction='column' bg = '#8D9EFF' borderRadius = {10} display = 'flex' justifyContent='center' p = {10} h='30vh' w='40vh'>
                    <Input bg='white' id = 'placeName' placeHolder = 'placeName' />
                    <Input bg='white' id = 'locationName' placeHolder = 'locationName' />
                    <Input bg='white' id = 'description' placeHolder = 'description' />
                    <Input bg='white' id = 'imgName' placeHolder = 'imgName' />

                    <Stack direction='row' display='flex' justifyContent = 'center' spacing = {10}>
                        <Button onClick = {check} colorScheme = 'facebook'>add</Button>
                        <Button onClick={check} colorScheme = 'facebook'>search</Button>
                    </Stack> 
                </Stack>
            </Box>
        </>
    )

}

export default AddLocation;

