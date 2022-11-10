import {React} from "react";
import {Box, Stack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button } from "@chakra-ui/react";

function SortButton(props){

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
                    <Stack onChange={props.handler} direction='column'>
                        <Button>Hà Nội</Button>
                        <Button>Đà Nẵng</Button>
                        <Button>Hồ Chí Minh</Button>
                    </Stack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default SortButton;