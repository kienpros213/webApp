import {React, useState, useEffect} from "react";
import { Stack, Box, Text, Divider, Input, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import PlaceByDetail from '../components/PlaceByDetail'
import { useParams, Link } from "react-router-dom";
function LocationList(){

    const {location} = useParams();

    const [place, setPlace] = useState([]);

    useEffect( () => {
        fetch('http://localhost:8080/location/findLocation?placeName='+location+'')
        .then( (response) => response.json() )
        .then( (data) => setPlace(data) );
        }, []
    )

    const [desc, setDesc] = useState("lmao")
    function fetchData(e){
        const locationId = e.target.id;
        fetch("http://localhost:8080/location/findLocationById?id="+locationId+"")
        .then( (response) => response.json() )
        .then( (data) => setDesc(data.description) );
        }
    
    const [placeName, setPlaceName] = useState({location})
    useEffect( () => {
        fetch('http://localhost:8080/location/findLocation?placeName='+placeName+'')
        .then( (response) => response.json() )
        .then( (data) => setPlace(data) );
        },[placeName]
    )

    return(
        <Stack direction='row' w = '100vw' h = '100vw'>
            {/* left */}
            <Stack pt={10} bg = '#b6d1e3' w = '50vw' h = '100vw'>
                <Stack bg = '#b6d1e3' direction='row' spacing = {5} display='flex' justifyContent = 'center'>             
                    <Stack dir="column" pt = {10} display='flex' alignItems= 'center'>

                            {/*button*/}
                            <Accordion >
                                <AccordionItem textAlign='center'>
                                        <Text fontSize='3xl'> Bộ lọc </Text>
                                        <Divider orientation='horizontal' />
                                        <Input placeholder="Tìm theo điểm đến" bg = 'white'/>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='center'>
                                            tìm theo vị trí
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Stack direction='column'>
                                            <Button onClick={()=>{setPlaceName("ha noi")}}>Hà Nội</Button>
                                            <Button onClick={()=>{setPlaceName("da nang")}}>Đà Nẵng</Button>
                                            <Button onClick={()=>{setPlaceName("ho chi minh")}}>Hồ Chí Minh</Button>
                                        </Stack>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            {/*button*/}
                    </Stack>
                    <Stack bg = '#b6d1e3'>
                        {place.map((item)=> (
                            <Link key = {item.locationId} onClick={fetchData}>
                                <PlaceByDetail  id = {item.locationId} img = {item.imgName} place = {item.locationName} number={item.id} />
                            </Link>
                                )
                            )
                        }
                    </Stack>
                </Stack>
            </Stack>

            {/* right */}
                <Stack direction='column' bg = 'black' w = '50vw' h = '100vw' pos='fixed' left = '50vw'>
                    <Box bg = '#3277e6' h='25%'>
                        <Box w='100%' fontSize='4xl' textAlign = 'center'> Description </Box>
                        <Text overflowWrap='break-word' fontSize='2xl' paddingY='10' paddingX='10'> {desc} </Text>
                    </Box>
                    <Box bg = '#e632b3' h='25%' ></Box>
                </Stack>
        </Stack>
    );

}

export default LocationList;