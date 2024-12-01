CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
    img TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    likes INT DEFAULT 0
    );