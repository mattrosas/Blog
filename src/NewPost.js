import React, { useState,useEffect } from 'react'
import "./App.css"
import { Link, useParams } from 'react-router-dom';



function NewPost() {

  const { Postid } = useParams();
  console.log ( Postid ) ;


  const [Titulo, setTitulo] = useState("");
  const [arrayGuardarTitulo, setArrayGuardarTitulo] = useState([]);

  function GuardarTitulo() {
    if (Titulo) {
      setArrayGuardarTitulo([...arrayGuardarTitulo, Titulo]);
      setTitulo("");
    }
  }
  
  const [Tema, setTema] = useState("");
  const [arrayGuardarTema, setArrayGuardarTema] = useState([]);

  function GuardarTema() {
    if (Tema) {
      setArrayGuardarTema([...arrayGuardarTema, Tema]);
      setTema("");
    }
  }

    const [Escritor, setEscritor] = useState("");
    const [arrayGuardarEscritor, setArrayGuardarEscritor] = useState([]);
 
    function GuardarEscritor() {
      if (Escritor) {
        setArrayGuardarEscritor([...arrayGuardarEscritor, Escritor]);
        setEscritor("");
      }
    }

      const [Post, setPost] = useState("");
      const [arrayGuardarPost, setArrayGuardarPost] = useState([]);
   
      function GuardarPost() {
        if (Post) {
          setArrayGuardarPost([...arrayGuardarPost, Post]);
          setPost("");
        }
      }
 
      useEffect(() => {
        let PostsGuardados = JSON.parse(localStorage.getItem('posts'));
        if (PostsGuardados) setPost(PostsGuardados);
      }, []);

      const nuevaCosa = {
        id: Date.now(),
        Titulo: Titulo,
        Escritor: Escritor,
        Tema: Tema,
        Post: Post,
      };
     
      const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaCosa = {
            id: Date.now(),
            Titulo: Titulo,
            Escritor: Escritor,
            Tema: Tema,
            Post: Post,
          };

          let actu=[...Post, nuevaCosa];
          
          localStorage.setItem('posts', JSON.stringify(actu));
      setPost(actu);
      setTitulo('');
      setEscritor('');
      setTema('');
      setPost('');
    };

    function Postear() {
      GuardarTitulo()
      GuardarEscritor()
      GuardarTema()
      GuardarPost()
    }


  return (
    <>
    <div style={{backgroundColor: 'black'}}>
    <h1 className='titulo-h1'>New Post</h1>
    </div>


      <div className='post'>
          <input
          placeholder='Titulo'
          type='text'
          value={Titulo}
          onChange={(ev) => setTitulo(ev.target.value)}
        ></input>


        <input
          placeholder='Escritor'
          type='text'
          value={Escritor}
          onChange={(ev) => setEscritor(ev.target.value)}
        ></input>


        <input
          placeholder='Tema'
          type='text'
          value={Tema}
          onChange={(ev) => setTema(ev.target.value)}
        ></input>


        <textarea
          placeholder='postea lo que quieras'
          type='text'
          value={Post}
          onChange={(ev) => setPost(ev.target.value)}
        ></textarea>

          <button
           type='button' 
           onClick={Postear}
           >postear</button>
      </div>
    </>
  )
}




export default NewPost;