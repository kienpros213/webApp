import {React} from "react";
import {Box, Stack} from '@chakra-ui/react'
import AddPlace from "./AddPlace";
import AdminList from "../components/AdminList";
import AddLocation from "./AddLocation";

function AdminPage(){

    return(
        <Stack direction="row" spacing='20px' h = '100vh' borderWidth = '2px' bg = '#8D9EFF' display="flex" justifyContent="center" alignItems = 'center'>
            <AdminList/>
            <Box direction = 'column' spacing = '10px'>
                <AddPlace/>
                <AddLocation/>
            </Box>
        </Stack>
    );
}

export default AdminPage;