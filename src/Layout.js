import { Outlet, NavLink } from "react-router-dom";
import React from 'react'


const Layout = () =>{
 return <div>
  <nav>
    <ul>
        <li>
            <NavLink end to="/" >Home</NavLink>
        </li>
        <li>
            <NavLink to="/NewPost" >New Post</NavLink>
        </li>
        <li>
            <NavLink to ="/Publicaciones">Publicaciones</NavLink>
        </li>
    </ul>
  </nav>
  <hr />
  <Outlet />
 </div>
}


export default Layout;