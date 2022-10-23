import React from 'react';
import {HStack, Box} from '@chakra-ui/react';
import SearchByDetail from './SearchByDetail';
import {hcm, hanoi, haiphong, danang, hue, quangninh, ninhbinh, quangbinh, nhatrang} from './image/imageList'


function SearchBy(){
    return(
        <Box bg='#E1FFEE'>
            <HStack pt={20} spacing={10} display='flex' justifyContent='center'>
                <SearchByDetail link={'/hcm'} img = {hcm} place = 'Hồ Chí Minh' number='31 địa điểm' />
                <SearchByDetail link={'/hanoi'} img = {hanoi} place = 'Hà Nội' number='31 địa điểm' />
                <SearchByDetail link={'/danang'} img = {danang} place = 'Đà Nẵng' number='31 địa điểm' />
            </HStack>
            <HStack pt={20} spacing={10} display='flex' justifyContent='center'>
                <SearchByDetail link={'/haiphong'} img = {haiphong} place = 'Hải Phòng' number='31 địa điểm' />
                <SearchByDetail link={'/hue'} img = {hue} place = 'Thừa Thiên Huế' number='31 địa điểm' />
                <SearchByDetail link={'/quangninh'} img = {quangninh} place = 'Quảng Ninh' number='31 địa điểm' />
            </HStack>
            <HStack pt={20} spacing={10} display='flex' justifyContent='center'>
                <SearchByDetail link={'/ninhbinh'} img = {ninhbinh} place = 'Ninh Bình' number='31 địa điểm' />
                <SearchByDetail link={'/quangbinh'} img = {quangbinh} place = 'Quảng Bình' number='31 địa điểm' />
                <SearchByDetail link={'/nhatrang'} img = {nhatrang} place = 'Nha Trang' number='31 địa điểm' />
            </HStack>
        </Box>
    )
}

export default SearchBy;