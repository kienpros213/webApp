import {React, useState, useEffect} from "react";
import { Input, Button, Stack, useToast, Select, Text, Textarea } from '@chakra-ui/react';

function AddLocation(props){
    
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
            const lat = document.getElementById('lat').value;
            const lng = document.getElementById('lng').value;

            if (lat === null || lat === "", lng === null || lng === "", placeName === null || placeName === "", locationName === null || locationName === "", description === null || description === "", imgName === null || imgName === "") {
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
                    imgName: imgName,
                    lat: lat,
                    lng: lng
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
        <Stack direction='row' bg = '#8D9EFF' h = '100vh' display = 'flex' justifyContent = 'center' alignItems = 'center'>
            <Stack direction='column' bg = 'white' borderRadius = {10} display = 'flex' justifyContent='center' p = {10} h='35vh' w='40vh'>
                <Text fontSize = 'xl' textAlign='center' color = 'black'> Thêm địa điểm </Text>
                <Select id = 'placeName' bg = 'white' color = 'black'>
                    {place.map((item)=> (
                            <option> {item.placeName} </option>
                            )
                        )
                    }
                </Select>
                <Input bg='white' id = 'locationName' placeHolder = 'tên địa điểm' />
                <Stack direction='row'>
                    <Input w = '50%' bg='white' id = 'lat' placeHolder = 'lat' />
                    <Input w = '50%' bg='white' id = 'lng' placeHolder = 'lng' />
                </Stack>
                <Input bg='white' id = 'imgName' placeHolder = 'địa chỉ ảnh' />
                <Stack direction='row' display='flex' justifyContent = 'center' spacing = {10}>
                    <Button onClick = {check} colorScheme = 'facebook'>add</Button>
                </Stack> 
            </Stack>
            <Textarea id = 'description' borderRadius = '10px' color = 'black' w = '40vw' h = '35vh' bg = 'white' p = {10} placeholder='write something'/>
        </Stack>
        )

}

export default AddLocation;
