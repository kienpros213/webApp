import React from 'react';
import {HStack, Box} from '@chakra-ui/react';
import SearchByDetail from './SearchByDetail';
import {hcm, hn, hp, dn, h, qn, nb, qb, nt} from './image/imageList'


function SearchBy(){
    return(
        <Box bg='#E1FFEE'>
            <HStack pt={20} spacing={10} display='flex' justifyContent='center'>
                <SearchByDetail link={'/hcm'} img = {hcm} place = 'Hồ Chí Minh' number='31 địa điểm' />
                <SearchByDetail link={'/hanoi'} img = {hn} place = 'Hà Nội' number='31 địa điểm' />
                <SearchByDetail link={'/danang'} img = {dn} place = 'Đà Nẵng' number='31 địa điểm' />
            </HStack>
            <HStack pt={20} spacing={10} display='flex' justifyContent='center'>
                <SearchByDetail link={'/haiphong'} img = {hp} place = 'Hải Phòng' number='31 địa điểm' />
                <SearchByDetail link={'/hue'} img = {h} place = 'Thừa Thiên Huế' number='31 địa điểm' />
                <SearchByDetail link={'/quangninh'} img = {qn} place = 'Quảng Ninh' number='31 địa điểm' />
            </HStack>
            <HStack pt={20} spacing={10} display='flex' justifyContent='center'>
                <SearchByDetail link={'/ninhbinh'} img = {nb} place = 'Ninh Bình' number='31 địa điểm' />
                <SearchByDetail link={'/quangbinh'} img = {qb} place = 'Quảng Bình' number='31 địa điểm' />
                <SearchByDetail link={'/nhatrang'} img = {nt} place = 'Nha Trang' number='31 địa điểm' />
            </HStack>
        </Box>
    )
}

export default SearchBy;