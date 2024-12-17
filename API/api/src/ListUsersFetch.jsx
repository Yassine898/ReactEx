import {useEffect,useState} from 'react';

export default function UsersFetch(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        const getData=async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const UsersData= await response.json();
            setUsers(UsersData)
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