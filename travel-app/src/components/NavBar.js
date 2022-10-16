import React from 'react';
import './componentStyle.css';
import { Button, HStack, Box } from '@chakra-ui/react'

function NavBar(){
    return(
        <Box className="navBar" bg='#7FBCD2'>
            <HStack bg='#7FBCD2' spacing={1} ml={550}>
                <Button className = 'navButton' fontSize={12} variant='ghost'>Bản đồ du lịch</Button>
                <Button className = 'navButton' fontSize={12} variant='ghost'>Xu hướng</Button>
                <Button className = 'navButton' fontSize={12} variant='ghost'>Danh sách</Button>
                <Button className = 'navButton' fontSize={12} variant='ghost'>Blog</Button>
                <Button className = 'navButton' fontSize={12} variant='ghost'>Đăng nhập</Button>
            </HStack>
        </Box>
    );
}

export default NavBar;