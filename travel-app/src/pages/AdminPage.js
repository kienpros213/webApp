import {React, useState} from "react";
import {Box, Stack, Switch} from '@chakra-ui/react'
import AddPlace from "./AddPlace";
import AdminList from "../components/AdminList";
import AddLocation from "./AddLocation";

function AdminPage(){

    const [currentState, setCurrentState] = useState(false)
    //background, form, font, box
    const [darkMode, setdarkMode] = useState(["#8D9EFF", "white", "black", "white"])

    function Check(){
        if(currentState){
            //bright mode
            setCurrentState(false)
            setdarkMode(["#8D9EFF", "white", "black", "white"])
        }
        else{
            //dark mode
            setCurrentState(true)
            setdarkMode(["#404258", "#474E68", "white", "#6B728E"])
        }
        console.log(currentState)
    }

    return(
        <Stack direction="row" spacing='20px' h = '100vh' borderWidth = '2px' bg = {darkMode[0]} display="flex" justifyContent="center" alignItems = 'center'>
            <Switch isChecked = {currentState} onChange={Check}/>
            <Stack direction = 'column' spacing='1vh'>
                <AddPlace formColor = {darkMode[1]} fontColor = {darkMode[2]} boxColor = {darkMode[3]}/>
                <AddLocation formColor = {darkMode[1]} fontColor = {darkMode[2]} boxColor = {darkMode[3]}/>
            </Stack>
            <AdminList formColor = {darkMode[1]} fontColor = {darkMode[2]} boxColor = {darkMode[3]}/>
        </Stack>
    );
}

export default AdminPage;