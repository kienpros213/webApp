import React from 'react';
import {HStack} from '@chakra-ui/react';
import SearchByDetail from './SearchByDetail';

function SearchBy(){
    return(
        <HStack spacing={10} bg='tomato' display='flex' justifyContent='center'>
            lmao
            <SearchByDetail place = 'Thành phố Hồ Chí Minh' number='31 địa điểm' />
            <SearchByDetail place = 'Thành phố Hồ Chí Minh' number='31 địa điểm' />
            <SearchByDetail place = 'Thành phố Hồ Chí Minh' number='31 địa điểm' />
        </HStack>
    );
}

export default SearchBy;