import {useState} from 'react';

export default function HideText(){
    const [ishide,setHide]=useState(false);
    const Hide_Show=()=>{
        setHide(!ishide);
    }
    return (
        <>
        <p class='text'>{ishide?'':'Hello World'}</p>
        <button onClick={Hide_Show}>{ishide?'Show':'Hide'}</button></>
    )
}