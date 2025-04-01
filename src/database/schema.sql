CREATE DATABASE cadastro;

\c cadastro;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (name, email) VALUES 
    ('Thiago Ferreira', 'thiago.ferreira@email.com'),
    ('Marcelo Carboni', 'marcelo.carboni@email.com'),
    ('Eduardo Correia', 'eduardo.correia@email.com'),
    ('Felipe Santos', 'felipe.santos@email.com');
    
INSERT INTO posts (user, conteudo) VALUES 
    ('Thiago Ferreira', 'Post de banco de dados.'),
    ('Marcelo Carboni', 'Post sobre html e css.'),
    ('Eduardo Correia', 'Post sobre Front-End.'),
    ('Felipe Santos', 'Post sobre Back-End.');