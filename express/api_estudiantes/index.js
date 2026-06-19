// Mencionando el modulo de express para nuestro proyecto
const express = require('express')

// creando nuestro objeto central (global) que se utilizara en nuestro proyecto (rutas, funciones, configuraciones)
const app = express()

// indicamos que nuestra api tiene un middleware (procesar datos en formato JSON)
app.use(express.json())

// comando para ejecutar el servidor (archivo) -> node index.js

// creando enrutamiento para nuestra API

// creando la ruta principal (peticion HTTP: GET, POST, PUT, DELETE, PATCH)
/**
 * (primer parametro) req = request (se utiliza cuando necesitamos por ejemplo datos del usuario (body), headers, parametros)
 * (segundo parametro) res = response (lo que se devuelve al cliente)
 */

// Mi primer endpoint
app.get('/', (req, res) => {
    //codigo de la funcion
    res.send("Hola Mundo, Bienvenidos a mi API Estudiantes")
})

// ruta para obtener todos los estudiantes (segundo endpoint)
app.get('/estudiantes', (req, res) => {
    // codigo
    res.status(200).json(estudiantes)
});

// ruta para buscar un estudiante por ID (la ruta lleva parametro (:))
app.get('/estudiantes/:estudianteId', (req, res) => {
    //capturando el valor del parametro
    const id = Number(req.params.estudianteId); 
    //devolvemos el estudiante con el metodo find
    const encontrar_estudiante = estudiantes.find(estudiante => estudiante.id === id);

    //validando si el estudiante NO existe
    if(!encontrar_estudiante){
        return res.status(404).json({ error: 'Estudiante no encontrado' })
    }

    res.status(200).json(encontrar_estudiante)
});

// ruta para crear un nuevo estudiante
app.post('/estudiantes', (req, res) => {
    // haciendo el cuerpo de datos para registrar el estudiante
    const { nombre, edad, correo } = req.body

    // agregamos los datos ingresados a un objeto
    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        //nombre: nombre
        nombre,
        edad,
        correo
    }

    //agregamos el nuevo objeto al arreglo
    estudiantes.push(nuevoEstudiante);

    res.status(201).json({
        message: 'Registrado exitosamente',
        estudiante: nuevoEstudiante
    })

});

// ruta para actualizar un estudiante (correo)
app.patch('/estudiantes/:estudianteId', (req, res) => {
    // primero encontramos al estudiante a actualizar
    const id = Number(req.params.estudianteId); 
    const encontrar_estudiante = estudiantes.find(estudiante => estudiante.id === id);

    //validando si el estudiante NO existe
    if(!encontrar_estudiante){
        return res.status(404).json({ error: 'Estudiante no encontrado' })
    }

    // segundo si el estudiante existe, actualizamos su correo
    const { nuevo_correo } = req.body
    encontrar_estudiante.correo = nuevo_correo

    res.status(200).json({
        message: 'Correo actualizado exitosamente',
        estudiante: encontrar_estudiante
    })
});