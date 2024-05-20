// app.js

// Importar el módulo Express
const express = require('express');

// Crear una aplicación Express
const app = express();

// Definir un puerto en el cual el servidor escuchará
const port = 3000;

// Definir una ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor y hacer que escuche en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
