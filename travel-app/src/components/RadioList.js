import {React} from "react";
import {Box, Stack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Radio, RadioGroup, Button } from "@chakra-ui/react";

function RadioButton(props){

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
                <RadioGroup>
                    <Stack onChange={props.handler} direction='column'>
                        <Radio id = 'a' value='1'>Hồ Chí Minh</Radio>
                        <Radio id = 'b' value='2'>Hà Nội</Radio>
                        <Radio id = 'c' value='3'>Đà Nẵng</Radio>
                    </Stack>
                    </RadioGroup>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

function print(e){
    console.log(e.target.id)
}

export default RadioButton;