import {React, useState, useEffect} from "react";
import {
    Table,
    Text,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Stack,
    Button,
  } from '@chakra-ui/react'

function AdminPage(){

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
        <Stack bg = '#B9E0FF' direction='column' h='100vh' display='flex' justifyContent = 'center' alignItems = 'center'>
            <Text fontSize = '4xl' > Admin Page </Text>
            <Text fontSize = '2xl' > selected location id: {selected} </Text>
            <Box overflow='hidden' border='1px' borderRadius = '10px' overflowY= 'scroll' h='40vh' maxH='40vh' maxW='40vw'>
                <Table variant='striped'>
                    <Thead>
                        <Tr>
                            <Th> id </Th>
                            <Th> locationName </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {place.map((item)=> (
                        <Tr key = {item.locationId}>
                            <Td id = {item.locationId} onClick={(e)=>{setSelected(e.target.id)}}> {item.locationId} </Td>
                            <Td id = {item.locationId} onClick={(e)=>{setSelected(e.target.id)}}> {item.locationName} </Td>
                        </Tr>
                            )
                        )
                    }
                    </Tbody>
                </Table>
            </Box>
            <Button onClick={deleteLocation} > Delete </Button>
        </Stack>
    );
}

export default AdminPage;