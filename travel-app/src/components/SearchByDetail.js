import React from "react";
import {Box, Image,Stack} from '@chakra-ui/react';

function SearchByDetail(props){
    return(
            <Stack className="imgContainer" maxW={250} borderRadius={10} overflow='hidden'>
                <Image className = 'img' src="https://upload.wikimedia.org/wikipedia/commons/0/00/Khu_trung_t%C3%A2m_th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh%2C_nh%C3%ACn_t%E1%BB%AB_ph%C3%ADa_qu%E1%BA%ADn_2.JPG"
                alt="lmao" />
                <Box bg='white' className = 'par' color='black' p={3}>
                    {props.place}<br/>
                    {props.number}
                </Box>
            </Stack>
    );
}

export default SearchByDetail;