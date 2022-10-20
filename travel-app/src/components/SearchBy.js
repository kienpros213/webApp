import React from 'react';
import {HStack, Box} from '@chakra-ui/react';
import SearchByDetail from './SearchByDetail';
import {hcm, hanoi, haiphong, danang, hue, quangninh, ninhbinh, quangbinh, nhatrang} from './image/imageList'

function SearchBy(){
    return(
        <Box bg='#E1FFEE'>
            <HStack pt={20} spacing={10} display='flex' justifyContent='center'>
                <SearchByDetail img = {hcm} place = 'Hồ Chí Minh' number='31 địa điểm' />
                <SearchByDetail img = {hanoi} place = 'Hà Nội' number='31 địa điểm' />
                <SearchByDetail img = {danang} place = 'Đà Nẵng' number='31 địa điểm' />
            </HStack>
            <HStack pt={20} spacing={10} display='flex' justifyContent='center'>
                <SearchByDetail img = {haiphong} place = 'Hải Phòng' number='31 địa điểm' />
                <SearchByDetail img = {hue} place = 'Thừa Thiên Huế' number='31 địa điểm' />
                <SearchByDetail img = {quangninh} place = 'Quảng Ninh' number='31 địa điểm' />
            </HStack>
            <HStack pt={20} spacing={10} display='flex' justifyContent='center'>
                <SearchByDetail img = {ninhbinh} place = 'Ninh Bình' number='31 địa điểm' />
                <SearchByDetail img = {quangbinh} place = 'Quảng Bình' number='31 địa điểm' />
                <SearchByDetail img = {nhatrang} place = 'Nha Trang' number='31 địa điểm' />
            </HStack>
        </Box>
    )
}

export default SearchBy;