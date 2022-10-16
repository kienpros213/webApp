import React from "react";
import {Box, Image} from '@chakra-ui/react';

function SearchByDetail(props){
    return(
            <Box maxW={250} borderWidth='1px' borderRadius={10} overflow='hidden'>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/0/00/Khu_trung_t%C3%A2m_th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh%2C_nh%C3%ACn_t%E1%BB%AB_ph%C3%ADa_qu%E1%BA%ADn_2.JPG"
                alt="lmao" />
                <Box p={3}>
                    {props.place}<br/>
                    {props.number}
                </Box>
            </Box>
    );
}

export default SearchByDetail;