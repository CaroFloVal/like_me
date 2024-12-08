// frontend/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';


const getPosts = async () => {
    try {
        const { data: posts } = await axios.get(urlBaseServer + "/posts");
        setPosts(posts); // Actualiza el estado con los posts obtenidos
    } catch (error) {
        console.error("Error al obtener los posts:", error.message);
    }
};

const agregarPost = async () => {
    try {
        const post = { titulo, url: imgSrc, descripcion, likes: 0 };
        await axios.post(urlBaseServer + "/posts", post); // Envía el nuevo post al servidor
        await getPosts(); // Llama a getPosts para actualizar el estado con los datos actualizados del servidor
    } catch (error) {
        console.error("Error al agregar el post:", error.message);
    }
};

// Crea el contenedor de React y renderiza la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div>
            <h1>Bienvenido a la aplicación de Like Me</h1>
            <button onClick={agregarPost}>Agregar Post</button>
        </div>
    </React.StrictMode>
);
