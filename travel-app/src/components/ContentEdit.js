import { useState } from 'react';


function ContentEdit(props){
    const onChange = (e)=>{props.setValue(e.target.value)}

    return(
        <textarea
            rows='1'
            type = 'text'
            aria-label='field name'
            value = {props.value}
            onChange = {onChange}
        />
    )
}

export default ContentEdit;