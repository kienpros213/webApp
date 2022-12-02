import { Text,Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Stack,
    Button,
} from "@chakra-ui/react";

import {React, useState, useEffect} from "react";

function AdminList(props){

    const [currentState, setCurrentState] = useState(false)

    //render place
    const [selected, setSelected] = useState("lmao");
    const [place, setPlace] = useState([]);

    useEffect( () => {
        fetch('http://localhost:8080/location/allLocation')
        .then( (response) => response.json() )
        .then( (data) => setPlace(data) );
        },[]
    )
    
    //delete place
    function deleteLocation(e){

        const id = e.target.id;

        let data = {
            id: id
        }

        fetch("http://localhost:8080/location/deleteLocation/?id="+selected+"", {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(data)
            }).then(res => {
            console.log("Request complete! response:", res);
            });

            console.log(id);
    }

    const [content, setContent] = useState("")
    function fetchData(e){
        const locationId = e.target.id;
        fetch("http://localhost:8080/location/findLocationById?id="+locationId+"")
        .then( (response) => response.json() )
        .then( (data) => setContent(data) );
    }

    return(
        <Stack direction='row' spacing = '1vh'>
            <Stack direction = 'column' borderRadius = '10px' bg = {props.formColor} display='flex'>
                <Stack direction='column'  overflow = 'hidden' bg = {props.formColor} borderRadius = {10} display = 'flex' justifyContent='center' p = {5} h='71vh' w='60vh'>  
                    <Stack textAlign = 'center'>
                        <Text fontSize = '4xl' color = {props.fontColor}> Danh sách địa điểm </Text>
                        <Text fontSize = '3xl' color = {props.fontColor}> đang chọn {selected} </Text>
                    </Stack>
                    <Stack overflowY= 'scroll'>    
                        <Table h='30vh' w='100%' variant='striped' colorScheme={props.boxColor} color = {props.fontColor}>
                            <Thead>
                                <Tr>
                                    <Th color = {props.fontColor}> id </Th>
                                    <Th color = {props.fontColor}> Location Name </Th>
                                    <Th color = {props.fontColor}> Place Name </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {place.map((item)=> (
                                <Tr _hover={{background: 'teal'}} _focus={{background: 'teal'}} key = {item.locationId}>
                                    <Td id = {item.locationId} onClick={fetchData}> {item.locationId} </Td>
                                    <Td id = {item.locationId} onClick={fetchData}> {item.locationName} </Td>
                                    <Td id = {item.locationId} onClick={fetchData}> {item.placeName} </Td>
                                </Tr>
                                    )
                                )
                            }
                            </Tbody>
                        </Table>
                    </Stack>
                    <Stack display = 'flex' justifyContent = 'center' direction='row' spacing = {10}>
                            <Button onClick = {deleteLocation} colorScheme = 'facebook'>Delete</Button>
                    </Stack> 
                </Stack>  
            </Stack>
            <Stack>
                <Stack bg = 'red' direction = 'row'>
                    <Text contentEditable = 'true'> {content.placeName} </Text>
                    <Text contentEditable = 'true'> {content.locationName} </Text>
                    <Text contentEditable = 'true'> {content.imgName} </Text>
                </Stack>
                <Text borderRadius = '10px' color = {props.fontColor} w = '40vw' h = '71vh' bg = {props.formColor} p = {10} placeholder='Here is a sample placeholder' contentEditable = 'true'>{content.description}</Text>
            </Stack>
        </Stack>
    )
}

export default AdminList;