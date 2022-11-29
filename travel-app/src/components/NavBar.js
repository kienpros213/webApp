import React from 'react';
import './componentStyle.css';
import { Button, HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom';


function NavBar(){

    return(
            <HStack p={5} pos='absolute' bg='transparent' spacing={5} display='flex' justifyContent='center'>
                <LinkButton link = "/" content = "Trang chủ" />
                <LinkButton link = "/adminPage" content = "Admin" />
            </HStack>
    );
}


function LinkButton(props){
    return(
        <Link to = {props.link}>
            <Button className = 'navButton' fontSize='xl'variant='ghost'>{props.content}</Button>
        </Link>
    )
}
export default NavBar;