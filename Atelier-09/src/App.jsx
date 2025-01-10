import './App.css'
import MyForm from './Myform'
import axios from "axios"
import { useEffect,useState} from 'react'
function App() {
  const  [data,setData]=useState([])
useEffect( ()=>{
  const FetchData = async ()=>{
     const res= await axios.get("http://localhost:5000/info")
  setData(res.data)
  }
 FetchData()
},[])


  return (
    <>
    
     <MyForm/> 
     <div>
      {(data) &&
        <div>
          <table border={1}>
            <thead><tr><th>name</th><th>email</th></tr></thead>
              <tbody>
          {data.map((user,index)=>(
              <tr key={index}><td>{user.name}</td><td>{user.email}</td></tr>
          ))}
          </tbody>
           </table>
        </div>
      } 
    </div>
    </>
  )
}

export default App
