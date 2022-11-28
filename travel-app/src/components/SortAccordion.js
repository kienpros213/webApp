import React from "react";
import { Stack, Box, Text, Divider, Input, Select, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";

function SortAccordion(props){
    return(
        <Accordion >
            <AccordionItem textAlign='center'>
                    <Text fontSize='3xl'> Bộ lọc </Text>
                    <Divider orientation='horizontal' />
                    <Input placeholder="Tìm theo điểm đến" bg = 'white'/>
                <AccordionButton>
                    <Box flex='1' textAlign='center'>
                        tìm theo vị trí
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Stack direction='column'>
                        <Select id = 'placeName' bg = 'white' onChange={props.setPlaceName}>
                            {props.allPlace.map((item)=> (
                                    <option key = {item.id}> {item.placeName} </option>
                                    )
                                )
                            }
                        </Select>
                    </Stack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default SortAccordion