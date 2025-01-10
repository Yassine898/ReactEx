import React from 'react'
import { ValidForm,usernameValid,emailValid,valid } from './methodes'
export default class MyForm extends React.Component{
    constructor (props){
        super(props)
        this.state={
            username:'',
            userValid:false,
            email:'',
            emailValid:false,
            FormValid:false,
            MsgError:{}
        }
        this.handleChange=this.handleChange.bind(this)
        this.usernameValid=usernameValid.bind(this)
        this.emailValid=emailValid.bind(this)
        this.ValidForm = ValidForm.bind(this)
        this.valid = valid.bind(this)
    }
    handleChange(e){
        const {name,value}=e.target
        this.setState({[name]:value},()=>{
            if(name==='username') this.usernameValid()
            if(name==='email') this.emailValid()
        }
        )
    }
   
 render(){
        return(
            <>
            <fieldset>
                <legend>
                    Form Validation
                </legend>
                <form action="" onSubmit={(e)=>{e.preventDefault();this.valid(this.state.username,this.state.email)}}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name='username' value={this.state.username} onChange={this.handleChange} aria-invalid={!this.state.userValid}/><br />
                    {this.state.MsgError.username && <p style={{color:'red'}}>{this.state.MsgError.username}</p>}

                    <label htmlFor="email">email:</label>
                    <input type="text" name='email' value={this.state.email} onChange={this.handleChange} aria-invalid={!this.state.emailValid}/><br />
                    {this.state.MsgError.email && <p style={{color:'red'}}>{this.state.MsgError.email}</p>}
                    <button type='submit'>Envoyer</button>
                </form>
            </fieldset>
            </>
        )
    }
}
