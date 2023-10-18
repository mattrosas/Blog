import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import NewPost from './NewPost'
import Post from './Publicaciones'
import Default from './Default'
import React from 'react';

function App() {
 return (
    <div className='Links'>
        <h1>Ponte a Postear</h1>
         <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="NewPost" element={<NewPost />} />
          <Route path="Publicaciones" element={<Post />} />
          <Route path="*" element={<Default />} />
          </Route>
         </Routes>
    </div>
 )
}


export default App;
