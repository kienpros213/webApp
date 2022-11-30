import {React, useState} from "react";
import {Stack, Switch} from '@chakra-ui/react'
import AddPlace from "./AddPlace";
import AdminList from "../components/AdminList";
import AddLocation from "./AddLocation";

function AdminPage(){

    const [currentState, setCurrentState] = useState(false)
    //background, form, font, box, placeholder
    const [darkMode, setdarkMode] = useState(["#8D9EFF", "white", "black", "white", "#3d3d3d"])

    function Check(){
        if(currentState){
            //bright mode
            setCurrentState(false)
            setdarkMode(["#8D9EFF", "white", "black", "white", "#3d3d3d"])
        }
        else{
            //dark mode
            setCurrentState(true)
            setdarkMode(["#0A192F", "#172A46", "#C2CCEC", "#6B728E", "#bdbdbd"])
        }
        console.log(currentState)
    }

    return(
        <Stack direction="row" spacing='20px' h = '100vh' borderWidth = '2px' bg = {darkMode[0]} display="flex" justifyContent="center" alignItems = 'center'>
            <Switch isChecked = {currentState} onChange={Check}/>
            <Stack direction = 'column' spacing='1vh'>
                <AddPlace formColor = {darkMode[1]} fontColor = {darkMode[2]} boxColor = {darkMode[3]} placeHolder = {darkMode[4]}/>
                <AddLocation formColor = {darkMode[1]} fontColor = {darkMode[2]} boxColor = {darkMode[3]} placeHolder = {darkMode[4]}/>
            </Stack>
            <AdminList formColor = {darkMode[1]} fontColor = {darkMode[2]} boxColor = {darkMode[3]} placeHolder = {darkMode[4]}/>
        </Stack>
    );
}

export default AdminPage;