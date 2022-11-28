import {React, useState, useEffect} from "react";
import {
    Table,
    Text,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Stack,
    Button,
  } from '@chakra-ui/react'
import AddLocation from "./AddLocation";
import AdminList from "../components/AdminList";

function AdminPage(){

    return(
        <AdminList/>
    );
}

export default AdminPage;