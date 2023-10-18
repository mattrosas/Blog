import { useParams } from 'react-router-dom';
import './App.css'
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'; 

function Post() {
    const { Postid } = useParams(); 
    const { post, setPost } = useState({});
  //  const [C_Nombre, setCNom] = useState(' ');
  //  const [C_comentario, setCCom] = useState(' ');
    const [comenN, setComenN] = useState([]);

    useEffect(() => {
    let PostsGuardados = JSON.parse(localStorage.getItem('posts'));
    if (PostsGuardados) {
        const PostEncontrado = PostsGuardados.find((p) => p.id === parseInt(Postid));
        setPost(PostEncontrado || {});
    }
    let comenGuardadas = JSON.parse(localStorage.getItem(`comen${Postid}`));
    if (comenGuardadas) setComenN(comenGuardadas);
  }, [Postid]);

   // function comentario(e){
     //   e.preventDefault();
       // let nuevoComentario = {
        //  nombre: C_Nombre,
        //  comentario: C_comentario,
      //  };
      //  let nuevosComentarios = [...comenN, nuevoComentario];
      //  setComenN(nuevosComentarios);
      //  localStorage.setItem(`comen${Postid}`, JSON.stringify(nuevosComentarios));
      //  setCNom('');
      //  setCCom('');
    //  }

  return (
    <>
    <div>
      {/* carga el post con la iformacion del useEffect*/}
      <h2>{Post.Titulo}</h2>
      <p>Escritor: {post.Escritor}</p>
      <h3> {post.Tema}</h3>
      <ReactMarkdown>{post.Post}</ReactMarkdown>
    </div>
    </>
  );
}
  export default Post;