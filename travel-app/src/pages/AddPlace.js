import React from 'react';
import { Input, Box, Button, Stack, Text } from '@chakra-ui/react';


function AddPlace(props){

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

        console.log(data);

    }
    return(
            <Box bg = '#8D9EFF' h = '100vh' display = 'flex' justifyContent = 'center' alignItems = 'center'>
                <Stack direction='column' bg = 'white' borderRadius = {10} display = 'flex' justifyContent='center' p = {5} h='35vh' w='40vh'>
                    <Text textAlign='center' fontSize='xl'> Thêm tỉnh thành </Text>
                    <Input id = 'placeName' placeHolder = 'Tên tỉnh thành' />
                    <Input id = 'description' placeHolder = 'mô tả' />
                    <Input id = 'imgName' placeHolder = 'địa chỉ ảnh' />

                    <Stack direction='row' display='flex' justifyContent = 'center' spacing = {10}>
                        <Button onClick = {addPlace} colorScheme = 'facebook'>add</Button>
                    </Stack> 
                </Stack>
            </Box>
    )
}


export default AddPlace;