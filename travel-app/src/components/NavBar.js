import React from 'react';
import './componentStyle.css';
import { Button, HStack, Box } from '@chakra-ui/react'


function NavBar(){
    return(
            <HStack p={5} pos='absolute' bg='transparent' spacing={5} display='flex' justifyContent='center'>
                <Button as = 'a' className = 'navButton' fontSize={15} variant='ghost'>Bản đồ du lịch</Button>
                <Button as = 'a' className = 'navButton' fontSize={15} variant='ghost'>Xu hướng</Button>
                <Button as = 'a' className = 'navButton' fontSize={15} variant='ghost'>Danh sách</Button>
                <Button as = 'a' className = 'navButton' fontSize={15} variant='ghost'>Blog</Button>
                <Button as = 'a' className = 'navButton' fontSize={15} variant='ghost'>Đăng nhập</Button>
            </HStack>
    );
}

export default NavBar;