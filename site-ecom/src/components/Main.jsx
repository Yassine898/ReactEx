import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
export default function  Main (){
    const navigate=useNavigate();
    const [usertab,setUsertab]=useState(JSON.parse(localStorage.getItem('user')))
    const [user,setUser]=useState({})
    useEffect(()=>{
        console.log(usertab)
        if(usertab.length==0){
            navigate('/Sign-In')
        }else{
            setUser(usertab[0])
        }
    },[])
    const log_out =()=>{
        localStorage.removeItem('user')
        navigate('/Sign-In');
    }
    return (
        <>
        <div>
        {
            (user && 
                <p>{user.username}</p>
            )
        }
        <button onClick={log_out}>out</button>
        </div>
        </>
    )
}