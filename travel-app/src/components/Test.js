import { Text,Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Stack,
    Button, } from "@chakra-ui/react";

import {React, useState, useEffect} from "react";

function Test(){

    const [selected, setSelected] = useState("lmao");
    const [place, setPlace] = useState([]);

    useEffect( () => {
        fetch('http://localhost:8080/location/allLocation')
        .then( (response) => response.json() )
        .then( (data) => setPlace(data) );
        }, []
    )

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

    return(
        <Stack direction = 'column' pt={10} bg = 'white' display='flex'>
            <Stack direction='column'  overflow = 'hidden' bg = '#8D9EFF' borderRadius = {10} display = 'flex' justifyContent='center' p = {10} h='50vh' w='60vh'>  
                <Stack textAlign = 'center'>
                    <Text fontSize = '4xl'> Danh sách địa điểm </Text>
                    <Text fontSize = '3xl'> đang chọn {selected} </Text>
                </Stack>
                <Stack overflowY= 'scroll'>    
                    <Table h='30vh' w='100%' variant='striped'>
                        <Thead>
                            <Tr>
                                <Th> id </Th>
                                <Th> Location Name </Th>
                                <Th> Place Name </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {place.map((item)=> (
                            <Tr key = {item.locationId}>
                                <Td id = {item.locationId} onClick={(e)=>{setSelected(e.target.id)}}> {item.locationId} </Td>
                                <Td id = {item.locationId} onClick={(e)=>{setSelected(e.target.id)}}> {item.locationName} </Td>
                                <Td id = {item.locationId} onClick={(e)=>{setSelected(e.target.id)}}> {item.placeName} </Td>
                            </Tr>
                                )
                            )
                        }
                        </Tbody>
                    </Table>
                </Stack>
                <Stack display = 'flex' justifyContent = 'center' direction='row' spacing = {10}>
                        <Button colorScheme = 'facebook'>add</Button>
                </Stack> 
                </Stack>  
</Stack>
    )
}

export default Test;