import { Text,Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Stack,
    Button,
    Textarea,
    Switch
} from "@chakra-ui/react";

import {React, useState, useEffect} from "react";

function AdminList(){

    const [currenState, setCurrentState] = useState(false)

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


    function Check(){
        if(currenState){
            setCurrentState(false)
        }
        else{
            setCurrentState(true)
        }
        console.log(currenState)
    }

    function Check2(){
        if(currenState){
            console.log("lmao true")
        }
        else{
            console.log("lmao false")
        }
    }

    return(
        <Stack direction='row' spacing = '1vh'>
            <Switch isChecked = {currenState} onChange={Check}/>
            <Stack direction = 'column' borderRadius = '10px' bg = 'white' display='flex'>
                <Stack direction='column'  overflow = 'hidden' bg = 'white' borderRadius = {10} display = 'flex' justifyContent='center' p = {5} h='71vh' w='60vh'>  
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
            <Textarea value = {content.description} w = '40vw' h = '71vh' bg = 'white' p = {10} placeholder='Here is a sample placeholder'/>
        </Stack>
    )
}

export default AdminList;