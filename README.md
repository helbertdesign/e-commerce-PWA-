# E-Commerce PWA

Aplicación web de e-commerce desarrollada con React + Node.js + MariaDB.

## Arquitectura

- **Frontend**: React + Vite. Basado en componentes reutilizables, manejo de estado global con Context API para el carrito de compras.
- **Backend**: Node.js + Express. Arquitectura en capas (controllers → services → repositories). Conectado a MariaDB.

## Requisitos

- Node.js
- MariaDB

## Instalación

### Base de datos

1. Abrí MariaDB y ejecutá:

```sql
CREATE DATABASE ecommerce;
USE ecommerce;
CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  imagen VARCHAR(500),
  categoria VARCHAR(100)
);
```

### Backend

1. Entrá a la carpeta backend: 
cd backend
2. Instalá dependencias:
npm install
3. Creá un archivo `.env` con:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Lolabrica123
DB_NAME=ecommerce
PORT=3000
4. Iniciá el servidor:
node index.js

### Frontend

1. Entrá a la carpeta frontend:
cd frontend
2. Instalá dependencias:
npm install
3. Iniciá la aplicación:
npm run dev
4. Abrí el navegador en `http://localhost:5173`
