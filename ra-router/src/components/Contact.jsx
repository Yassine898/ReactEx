
import {useNavigate} from 'react-router-dom'

export default function About(){
    const navigate=useNavigate()
    const go_Home=()=>{
        navigate("/")
    }
    return (
        <>
        <h1>Contact Page</h1>
        <p>go to home avec hook useNavigate</p>
        <button onClick={go_Home}>Go Home</button>
        </>
    )
}