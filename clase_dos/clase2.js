// console.log('Hola mundo JS !!');

var nombre = 'Sergio', apellido = 'Enriquez'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()
var primerLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

// var nombreCompleto = nombre+' '+apellido
// var nombreCompleto = `${nombre} ${apellido}`
var nombreCompletoApellidoMayus = `${nombre} ${apellido.toUpperCase()}`

// var str = nombre.charAt(1) + nombre.charAt(2)
var str = nombre.substr(1, 5)

var ultimaLetraDeNombre = apellido.substr(length-1)
