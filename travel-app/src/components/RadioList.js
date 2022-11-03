import {React, useState} from "react";
import {Box, Stack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Radio, RadioGroup } from "@chakra-ui/react";

function RadioButton(props, e){

    const [value, setValue] = useState('1')

    return(
        <Accordion>
            <AccordionItem>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        {props.sectionName}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                <RadioGroup onChange={setValue} onClick = {()=>{console.log(value)}}  value={value}>
                    <Stack direction='column'>
                        <Radio value='1'>Hồ Chí Minh</Radio>
                        <Radio value='2'>Hà Nội</Radio>
                        <Radio value='3'>Đà Nẵng</Radio>
                    </Stack>
                    </RadioGroup>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default RadioButton;