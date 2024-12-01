const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de conexión a PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'likeme',
    password: 'Yopli0867.',
    port: 5432,
});

// Ruta GET para obtener los posts
app.get('/posts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM POSTS');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los posts' });
    }
});

// Ruta POST para crear un nuevo post
app.post('/posts', async (req, res) => {
    const { titulo, url, descripcion} = req.body;
    try {
        const query = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0)';
        await pool.query(query, [titulo, url, descripcion]);
        res.status(201).json({ message: 'Post creado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el post' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});