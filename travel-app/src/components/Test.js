import React from 'react';
import SearchByDetail from './SearchByDetail';
import {hcm, hanoi} from './image/imageList'

const birthdayArray = [
    {imgName: hcm, placeName: 'Hồ Chí Minh', numberName: '2'},
    {imgName: hanoi, placeName: 'Hà Nội', numberName: '1'},
  ];
  
  export default function Birthdays() {
    return (
      <>
        {birthdayArray.map(({ imgName, placeName, numberName }) => (
          <SearchByDetail key={numberName} img = {imgName} place = {placeName} number={numberName} />
        ))}
      </>
    );
  }

