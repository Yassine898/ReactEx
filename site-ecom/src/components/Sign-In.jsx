import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [users, setUsers] = useState([]);
  const [mes, setmes] = useState(null);
  const navigate = useNavigate();
  const handlename = (e) => {
    setUsername(e.target.value);
  };
  const handlpassword = (e) => {
    setPassword(e.target.value);
  };
  const Signin = (e) => {
    e.preventDefault();
    const user = users.filter(
      (user) =>
        String(user.username) == username && String(user.password) == password
    );
    if (user.length !== 0) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else {
      setmes("username or password incorrect");
    }
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(await response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    return;
  }, []);
  const Reset = () => {
    setPassword("");
    setUsername("");
  };
  return (
    <div>
      {mes && <p>{mes}</p>}
      <fieldset>
        <legend>Sign in</legend>
        <form action="" onSubmit={Signin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="username ..."
              name="username"
              value={username ? username : ""}
              onChange={handlename}
            />
          </div>
          <div>
            <label htmlFor="password">password:</label>
            <input
              type="password"
              placeholder="password..."
              name="password"
              value={password ? password : ""}
              onChange={handlpassword}
            />
          </div>
          <button type="submit">Sign In</button>
          <button type="reset" onClick={Reset}>
            {" "}
            Reset
          </button>
          <p>
            don't have accout <Link to="/Regester">Regester here</Link>
          </p>
        </form>
      </fieldset>
    </div>
  );
}
