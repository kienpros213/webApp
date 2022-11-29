import {React, useState, useEffect} from "react";
import { Input, Box, Button, Stack, useToast, Select, Text } from '@chakra-ui/react';

function AddLocation(){

    const [place, setPlace] = useState([]);

    //render place list
    useEffect( () => {
        fetch('http://localhost:8080/place/allPlaces')
        .then( (response) => response.json() )
        .then( (data) => setPlace(data) );
        }, []
    )

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
        <Box display='flex' pt = '1vh'>
                <Stack direction='column' bg = 'white' borderRadius = '10px' display = 'flex' justifyContent='center' p = {5} h='35vh' w='40vh'>
                    <Text fontSize = 'xl' textAlign = 'center'> Thêm địa điểm </Text>
                    <Select id = 'placeName'>
                        {place.map((item)=> (
                                <option> {item.placeName} </option>
                                )
                            )
                        }
                    </Select>
                    <Input bg='white' id = 'locationName' placeHolder = 'tên địa điểm' />
                    <Input bg='white' id = 'description' placeHolder = 'mô tả' />
                    <Input bg='white' id = 'imgName' placeHolder = 'địa chỉ ảnh' />
                    <Stack direction='row' display='flex' justifyContent = 'center' spacing = {10}>
                        <Button onClick = {check} colorScheme = 'facebook'>add</Button>
                    </Stack> 
                </Stack>
        </Box>
    )
}

export default AddLocation;
