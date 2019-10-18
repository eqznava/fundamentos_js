var jimie = {
  nombre:'Jimie',
  apellido:'Nando',
  altura:1.63,
  cantidadDeLibros:400
}

var carlos = {
  nombre:'Carlos',
  apellido:'Hernandez',
  altura:1.80,
  cantidadDeLibros:120
}

var pancho = {
  nombre:'Francisco',
  apellido:'Hernan',
  altura:1.73,
  cantidadDeLibros:180
}

var sergio = {
  nombre:'Sergio',
  apellido:'Enriquez',
  altura:1.82,
  cantidadDeLibros:80
}

var jack = {
  nombre:'Jack',
  apellido:'Ramirez',
  altura:1.50,
  cantidadDeLibros:18
}

var emilia = {
  nombre:'Emilia',
  apellido:'Farrafouler',
  altura:1.90,
  cantidadDeLibros:10
}

const esAlta = ({altura}) => altura >= 1.8
const esBaja = ({altura}) => altura < 1.8

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personas = [jimie, carlos, pancho, sergio, jack, emilia]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

var personasCms = personas.map(pasarAlturaACms)

// var acum = 0
//
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

/*En esta clase lo que hicimos fue conocer las formas de reducir un atributo de nuestros objetos
en uno solo, las formas fueron atravez de un ciclo for y usando la funcion reduce
que recibe como parametros una funcion reducer la cual contiene dos parametros el acum (acumulador) y lo que se va a
acumular*/

console.log(`En total las personas tienen ${totalDeLibros} libros`);
