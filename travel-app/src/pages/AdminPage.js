import {React, useState, useEffect} from "react";
import {Stack} from '@chakra-ui/react'
import AdminList from "../components/AdminList";
import Test from "../components/Test";
import AddLocation from "./AddLocation";

function AdminPage(){

    return(
        <Stack>
            <Test/>
            <AddLocation/>
        </Stack>
    );
}

export default AdminPage;