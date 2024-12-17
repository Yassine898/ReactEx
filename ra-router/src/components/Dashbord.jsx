import {Outlet,Link,useParams} from 'react-router-dom';

export default function User(){
    let {id} = useParams();
    var a= Math.floor(Math.random()*4)+1;
    return(
        <><h1>Daschbord</h1>
        <nav>
            <Link to={'Profil'}>profil</Link>
            <Link to={'Setting'}>Setting</Link>
        </nav> 
        <Outlet></Outlet>
        </>
    )
}