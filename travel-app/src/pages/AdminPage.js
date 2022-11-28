import {React, useState, useEffect} from "react";
import {Stack} from '@chakra-ui/react'
import AdminList from "../components/AdminList";
import AddLocation from "./AddLocation";
import Test from "../components/Test";

function AdminPage(){

    return(
        <Stack>
            <Test/>
            <AdminList/>
        </Stack>
    );
}

export default AdminPage;