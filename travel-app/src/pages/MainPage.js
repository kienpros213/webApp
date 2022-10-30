import React from "react";
import NavBar from "../components/NavBar";
import view from '../components/image/view.jpg';
import { Image, Stack, Box, Text, Button } from '@chakra-ui/react'
import Place from "../components/Place";
import {hcm, hn, dn, qn, hp, chobenthanh, caurong, cauvang, langbac, hoguom, vanmieu, phoco, h, nb} from "../components/image/imageList"

function MainPage(){
    return(
            <Stack>
                {/* 1st Section */}
                <Box display = 'flex' justifyContent = 'center'>
                    <NavBar/>
                    <Image maxH='100vw' maxW='100vw' src={view}/>
                </Box>

                {/* 2nd Section */}

                <Box>
                    <Text left='20vw' top='10vw' fontSize='5xl' pos='absolute'> visit any location{<br/>} in the world </Text>
                    <Text left='20vw' top='20vw' fontSize='2xl' pos='absolute'> Nature, Break, and Dream. Find you place an book {<br/>} to begin with </Text>
                </Box>

                <Stack spacing={10} overflow='hidden' pl = {10} pr = {10} h='100vh' display='flex' direction='column'>
                    <Stack direction='row' pt='20' justifyContent = 'center'>
                        <Stack direction = 'column' spacing = {8}>
                            <Text fontSize='3xl' > Find the perfect location </Text>
                            <Text> A list of the Vietnam top 10 tourist attraction{<br/>} for a perfect location and vacation </Text>
                            <Button colorScheme='whatsapp' > Explore more </Button>
                        </Stack>
                        <Stack direction='row'>
                            <Place name = 'ho chi minh' h = '200px' w ='200px' imgName = {hcm} placeName = 'Hồ Chí Minh'/>
                            <Place name = 'ha noi' h = '200px' w ='200px' imgName = {hn} placeName = 'Hà Nội'/>
                            <Place name = 'quang ninh' h = '200px' w ='200px' imgName = {qn} placeName = 'Quảng Ninh'/>
                            <Place name = 'hai phong' h = '200px' w ='200px' imgName = {hp} placeName = 'Hải Phòng'/>
                            <Place name = 'da nang' h = '200px' w ='200px' imgName = {dn} placeName = 'Đà Nẵng'/>
                            <Place name = 'hue' h = '200px' w ='200px' imgName = {h} placeName = 'Huế'/>
                            <Place name = 'ninh binh' h = '200px' w ='200px' imgName = {nb} placeName = 'Ninh Bình'/>
                        </Stack>
                    </Stack>
                    <Box h='100%' display = 'flex' justifyContent = 'center'>
                        <Stack direction = 'column' display='flex' justifyContent = 'center'>
                            <Text textAlign='center' fontSize='5xl' > Explore Vietnam </Text>
                            <Stack direction='row' >
                                <Place h = '300px' w ='300px' imgName = {chobenthanh} placeName = 'Chợ Bến Thành'/>
                                <Place h = '300px' w ='300px' imgName = {caurong} placeName = 'Cầu Rồng'/>
                                <Place h = '300px' w ='300px' imgName = {cauvang} placeName = 'Cầu Vàng'/>
                                <Place h = '300px' w ='300px' imgName = {langbac} placeName = 'Lăng Bác'/>
                                <Place h = '300px' w ='300px' imgName = {hoguom} placeName = 'Hồ Gươm'/>
                                <Place h = '300px' w ='300px' imgName = {vanmieu} placeName = 'Văn Miếu'/>
                                <Place h = '300px' w ='300px' imgName = {phoco} placeName = 'Phố Cổ'/>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
    );
}

export default MainPage;