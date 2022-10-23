import React from 'react';
import './componentStyle.css';
import { Button, HStack, Box } from '@chakra-ui/react'

function NavBar(){
    return(
        <Box className="navBar" bg='#7FBCD2'>
            <HStack bg='#7FBCD2' spacing={1} ml={550}>
                <a href='/home'>
                    <Button className = 'navButton' fontSize={12} variant='ghost'>Bản đồ du lịch</Button>
                </a>
                <a href='/placeDetail' >

                <Button className = 'navButton' fontSize={12} variant='ghost'>Xu hướng</Button>
                </a>
                <a href = 'hcm'>

                <Button className = 'navButton' fontSize={12} variant='ghost'>Danh sách</Button>
                </a>
                <Button className = 'navButton' fontSize={12} variant='ghost'>Blog</Button>
                <Button className = 'navButton' fontSize={12} variant='ghost'>Đăng nhập</Button>
            </HStack>
        </Box>
    );
}

export default NavBar;