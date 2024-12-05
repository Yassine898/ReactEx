import {useEffect,useState} from 'react';
import axios from 'axios';
export default function UsersAxios(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        const getData=async ()=>{
            const response =await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        }
        getData();
    },[]);
    return (

        <>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        </>
    )
}
