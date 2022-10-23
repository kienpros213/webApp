import React from 'react'
import {Route, Routes} from "react-router-dom";
import Hcm from './pages/Hcm';
import News from './pages/News';
import Home from './pages/Home';

export default function Test(){
    return(

        <div>
            <ul>
                <li>
                    <a href = '/' >home</a>
                </li>

                <li>
                    <a href = '/news' >news</a>
                </li>

                <li>
                    <a href = '/home' >home</a>
                </li>
            </ul>

            <Routes>
                <Route path = '/' element = {<Hcm/>}/>
                <Route path = '/news' element = {<News/>}/>
                <Route path = '/home' element = {<Home/>}/>
            </Routes>
        </div>

    )
}