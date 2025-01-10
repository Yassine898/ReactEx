import express from 'express'

import cors from 'cors'

const Users=[{name:"ahmed",email:"ahmed12@gmail.com"}]

const app = express()
const port = 5000;

app.use(cors())
app.use(express.json());


app.get("/info",(req,res)=>{
    res.send(Users)
})


app.post("/AddUser",(req,res)=>{
    Users.push(req.body)
    res.status(200).send({message:"user bien enregisterer"})
})

app.listen(port,(error)=>{
    if(error){
       console.log(error) 
    }
    else{
        console.log(`server is running in port ${port}`)
    }
})