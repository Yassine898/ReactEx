/* // import { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function Form(){
const [username,setUsername]=useState(null);
const [password,setPassword]=useState(null);
const [mes,setMes]=useState(null);
const navigate = useNavigate();
const Regester= async (e)=>{
    e.preventDefault();
    
    let newUser;
    if(username && password){
        newUser={username,password};
    }
    try{
        const response = await axios.get('http://localhost:5000/api/users',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(newUser)
    });
    if(response.status===200){
        setMes('User added successfully!');
        navigate('/Sign-In')
    }else{
        setMes('Error adding user')
    }
    }catch(error){
        console.log(error);
    }
    
};
const handleName=(e)=>{
    setUsername(e.target.value);
}
const handlePsw=(e)=>{
setPassword(e.target.value);
}
    return(
        <div>
            {(mes && <p>
                {mes}
                </p>) }<fieldset>
            <legend>Sign in</legend>
            <form action="">
            <div>
                <label htmlFor="username">
                    Username:
                </label>
                <input type="text" placeholder="username ..." name="username" onChange={handleName}/>
            </div>
            <div>
                <label htmlFor="password">
                    password:
                </label>
                <input type="password" placeholder="password..." name="password" onChange={handlePsw}/>
            </div>
            <button type="submit" onClick={Regester}>
                Regester
            </button>
            <button type="reset"
            > Reset</button>
        </form>  
        </fieldset>
              
        </div>
       
    )
} */

    import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mes, setMes] = useState(null); // For displaying success/error messages
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  // Registration handler
  const register = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    
    // Ensure we have both a username and password
    if (!username || !password) {
      setMes("Both fields are required.");
      return;
    }

    const newUser = { username, password }; // Prepare user data for submission

    try {
      // Perform the POST request to add the new user
      const response = await axios.post("http://localhost:5000/api/users", newUser, {
        headers: {
          "Content-Type": "application/json", // Set the correct content type
        },
      });

      if (response.status === 200) {
        // Display success message and navigate to Sign-In page
        setMes("User added successfully!");
        navigate("/Sign-In"); // Redirect to Sign-In page
      } else {
        // If response status is not 200, show error message
        setMes("Error adding user");
      }
    } catch (error) {
      console.log(error);
      setMes("An error occurred while registering the user.");
    }
  };

  // Update username state when user types in the input field
  const handleName = (e) => {
    setUsername(e.target.value);
  };

  // Update password state when user types in the input field
  const handlePsw = (e) => {
    setPassword(e.target.value);
  };
  const reset=()=>{
    setPassword('');
    setUsername('');
  }
  return (
    <div>
      {mes && <p>{mes}</p>} {/* Show the message if available */}
      <fieldset>
        <legend>Sign In</legend>
        <form onSubmit={register}> {/* Use onSubmit to handle form submission */}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="username ..."
              name="username"
              value={username} // Controlled input
              onChange={handleName} // Update username state on change
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="password ..."
              name="password"
              value={password} // Controlled input
              onChange={handlePsw} // Update password state on change
            />
          </div>
          <button type="submit">Register</button> {/* Use submit type to trigger form submission */}
          <button type="reset" onClick={reset}>Reset</button>
        </form>
      </fieldset>
    </div>
  );
}
