import React from 'react';
import {HStack, Box} from '@chakra-ui/react';
import SearchByDetail from './SearchByDetail';

function SearchBy(){
    return(
        <Box bg='#E1FFEE' >
            <HStack pt={20} spacing={10} display='flex' justifyContent='center'>
                <SearchByDetail place = 'Thành phố Hồ Chí Minh' number='31 địa điểm' />
                <SearchByDetail place = 'Thành phố Hà Nôi' number='71 địa điểm' />
                <SearchByDetail place = 'Thành phố Thái Nguyên' number='31 địa điểm' />
            </HStack>
            <HStack pt={20} spacing={10} display='flex' justifyContent='center'>
                <SearchByDetail place = 'Thành phố Đà Nẵng' number='31 địa điểm' />
                <SearchByDetail place = 'Thành phố Hồ Chí Minh' number='31 địa điểm' />
                <SearchByDetail place = 'Thành phố Hồ Chí Minh' number='31 địa điểm' />
            </HStack>
            <HStack pt={20} spacing={10} display='flex' justifyContent='center'>
                <SearchByDetail place = 'Thành phố Hồ Chí Minh' number='31 địa điểm' />
                <SearchByDetail place = 'Thành phố Hồ Chí Minh' number='31 địa điểm' />
                <SearchByDetail place = 'Thành phố Hồ Chí Minh' number='31 địa điểm' />
            </HStack>
        </Box>
        
    );
}

export default SearchBy;