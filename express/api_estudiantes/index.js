// mencionando modulo express
const exreess = require('express')
// creando objeto central
const app = express()
// por defecto el puerto express 3000
// servidor localhost:3000
app.listen(3000, () => {
    console.log("hola ... estas utilizando EXPRESS")
})