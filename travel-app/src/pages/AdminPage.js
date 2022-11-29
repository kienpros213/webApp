import {React} from "react";
import {Box, Stack, Textarea} from '@chakra-ui/react'
import AddPlace from "./AddPlace";
import AdminList from "../components/AdminList";
import AddLocation from "./AddLocation";

function AdminPage(){

    return(
        <Stack direction="row" spacing='20px' h = '100vh' borderWidth = '2px' bg = '#8D9EFF' display="flex" justifyContent="center" alignItems = 'center'>
            <AdminList/>
            <Box direction = 'column'>
                <AddPlace/>
                <AddLocation/>
            </Box>
            <Textarea w = '40vw' h = '71vh' bg = 'white' p = {10} placeholder='Here is a sample placeholder'/>
        </Stack>
    );
}

export default AdminPage;