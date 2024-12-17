import UsersFetch from './ListUsersFetch.jsx';
import UsersAxios from './ListUsersAxios.jsx';
import './App.css';

function App() {
 return (
<> 
<div>
<h1>get data with fetch</h1>
<UsersFetch></UsersFetch>
  </div>
  <div>
<h1>get data with Axios</h1>
<UsersAxios></UsersAxios>
  </div>
  
  
</>
 
  
 )
}

export default App;
