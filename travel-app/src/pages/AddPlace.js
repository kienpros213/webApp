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
            <Box display='flex'>
                <Stack direction='column' bg = {props.formColor} borderRadius = {10} display = 'flex' justifyContent='center' p = {5} h='35vh' w='40vh'>
                    <Text textAlign='center' fontSize='xl' color = {props.fontColor}> Thêm tỉnh thành </Text>
                    <Input bg={props.boxColor} id = 'placeName' _placeholder={{ color: props.placeHolder }} color = {props.fontColor} placeHolder = 'Tên tỉnh thành' />
                    <Input bg={props.boxColor} id = 'description' _placeholder={{ color: props.placeHolder }} color = {props.fontColor} placeHolder = 'mô tả' />
                    <Input bg={props.boxColor} id = 'imgName' _placeholder={{ color: props.placeHolder }} color = {props.fontColor} placeHolder = 'địa chỉ ảnh' />

                    <Stack direction='row' display='flex' justifyContent = 'center' spacing = {10}>
                        <Button onClick = {addPlace} colorScheme = 'facebook'>add</Button>
                    </Stack> 
                </Stack>
            </Box>
    )
}


export default AddPlace;