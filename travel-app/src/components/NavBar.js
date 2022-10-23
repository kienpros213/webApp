import React from 'react';
import './componentStyle.css';
import {Route, Routes, useRoutes} from "react-router-dom";
import { Button, HStack, Box } from '@chakra-ui/react'
import SearchBy from './SearchBy';
import Search from './Search';

function NavBar(){
    return(
        <Box className="navBar" bg='#7FBCD2'>
            <HStack bg='#7FBCD2' spacing={1} ml={550}>
                <a href='/page1'>
                <Button className = 'navButton' fontSize={12} variant='ghost'>Bản đồ du lịch</Button>
                </a>

                <a href = '/page2'>

                <Button className = 'navButton' fontSize={12} variant='ghost'>Xu hướng</Button>
                </a>
                <Button className = 'navButton' fontSize={12} variant='ghost'>Danh sách</Button>
                <Button className = 'navButton' fontSize={12} variant='ghost'>Blog</Button>
                <Button className = 'navButton' fontSize={12} variant='ghost'>Đăng nhập</Button>
            </HStack>

            <Routes>
                <Route path = '/page1' element = {<SearchBy/>}/>
                <Route path = '/page2' element = {<Search/>}/>
            </Routes>
        </Box>
    );
}

export default NavBar;