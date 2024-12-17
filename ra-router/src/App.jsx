import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import Product from "./components/Product";
import Dashbord from "./components/Dashbord";
import Setting from "./components/Setting";
import Profil from "./components/Profil";
import { Routes, Route, NavLink } from "react-router-dom";
const style = {
  width: "600px",
  display: "flex",
  "justify-content": "space-between",
};
function App() {
  let b = Math.floor(Math.random()*20)+1;
  return (
    <>
      <nav style={style}>
        <NavLink to={"/"} activeClassName="active">
          Home
        </NavLink>
        <NavLink to={"/Dashbord"}>Dashbord</NavLink>
        <NavLink to={"/User/" + b} activeClassName="active">
          User
        </NavLink>
        <NavLink to={"/Contact"} activeClassName="active">
          Contact
        </NavLink>
        <NavLink to={"/About"} activeClassName="active">
          About
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* Route imbrique */}
        <Route path="user/:id" element={<User />}>
          <Route index element={<h1>index</h1>}></Route>
          <Route path="product/:id_prod" element={<Product />}></Route>
          <Route path="*" element={<h1>404 Not Found</h1>}></Route>
        </Route>

        {/* Routes imbrique */}
        <Route path="dashbord" element={<Dashbord></Dashbord>}>
          <Route path="setting" element={<Setting />}></Route>
          <Route path="profil" element={<Profil />}></Route>
          <Route path="*" element={<h1>404 Not Found</h1>}></Route>
        </Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
