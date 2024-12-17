import {Outlet,Link,useParams} from 'react-router-dom';

export default function User(){
    let {id} = useParams();
    var a= Math.floor(Math.random()*4)+1;
    return(
        <><h1> User : {id}</h1>
        <nav>
            <Link to={'Product/'+a}>product</Link>
        </nav> 
        <Outlet></Outlet>
        </>
    )
}