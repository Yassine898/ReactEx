import axios from 'axios'
export function usernameValid(){
    const username=this.state.username;
   var MsgError={...this.state.MsgError}
    var userValid = this.state.userValid
    if(username.length<=5){
        userValid=false
        MsgError.username='username invalid'
    }else{
        userValid=true
        MsgError.username=''
    }
this.setState({
    MsgError,userValid
},this.ValidForm)
}


export function emailValid(){
const email = this.state.email;
var emailValid = this.state.emailValid;
var MsgError = {...this.state.MsgError}
const emailPattern = /^[A-Za-z][A-Za-z0-9.]*@gmail\.com$/;
if(!emailPattern.test(email)){
    emailValid=false;
    MsgError.email='email invalid'
}else{
    emailValid=true
    MsgError.email=''
}
this.setState({
    emailValid,MsgError
},this.ValidForm)
}



export function ValidForm(){

this.setState(state=>({
    FormValid:(state.userValid && state.emailValid)
}))
}


export function valid(name,email){
if(this.state.FormValid){
   console.log('form est valid') 
    axios
    .post("http://localhost:5000/AddUser",{"name":name,"email":email}) 
   .then((res)=>{
    console.log(res.data.message)
    setTimeout(()=>{
        window.location.reload();
    },500)
   })
   .catch((error)=>console.log(error))
}
else{
    console.log('form non valid')
}

}   