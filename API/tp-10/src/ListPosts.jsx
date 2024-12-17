import axios from 'axios';
import {useState,useEffect} from 'react';

export default function Posts (){
    const [users,setUsers]=useState([]);
    const [posts,setPosts]=useState([]);
    const [postFiltrer,setpostFiltrer]=useState([])
    useEffect(()=>{
        const getUsers=async ()=>{
            const usersData=await axios.get('https://jsonplaceholder.typicode.com/posts');
            setUsers(usersData.data);
        }
        getUsers();
    },[])
    useEffect(()=>{
        const getPosts=async()=>{
            const PostsData=await axios.get('https://jsonplaceholder.typicode.com/users');
            setPosts(PostsData.data);
        };
        getPosts();
    },[])
    const getPostsByUser = (Id)=>{
        setpostFiltrer(posts.filter((post) => post.userId === Id)) 
    }
    return (
        <>
        <div className='container'>
            {users.map((user)=>(
                <div className='user' key={user.id}>
                    <p className='username'>Name:{user.name}</p>
                    <p className='useremail'>Email:{user.email}</p>
                    <p className='userCity'>Vilee:{user.address.city}</p>
                    <p className='userStreet'>Rue:{user.address.street}</p>
                    <button onClick={() => getPostsByUser(user.id)}>posts</button>
                    {(postFiltrer && 
                        <div className='posts'>
                            {postFiltrer.map((post)=>(
                                <div key={post.id}>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
        </>
    )
}