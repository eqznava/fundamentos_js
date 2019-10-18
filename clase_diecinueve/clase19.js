var jimie = {
  nombre:'Jimie',
  apellido:'Nando',
  altura:1.63
}

var carlos = {
  nombre:'Carlos',
  apellido:'Hernandez',
  altura:1.80
}

var pancho = {
  nombre:'Francisco',
  apellido:'Hernan',
  altura:1.73
}

var sergio = {
  nombre:'Sergio',
  apellido:'Enriquez',
  altura:1.82
}

var jack = {
  nombre:'Jack',
  apellido:'Ramirez',
  altura:1.50
}

var emilia = {
  nombre:'Emilia',
  apellido:'Farrafouler',
  altura:1.90
}

const esAlta = ({altura}) => altura >= 1.8
const esBaja = ({altura}) => altura < 1.8

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

/*Esta es la manera en que se regresa un nuevo objeto en una funcion
debe iniciar en ({})*/

var personas = [jimie, carlos, pancho, sergio, jack, emilia]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

var personasCms = personas.map(pasarAlturaACms)

// console.log(personasAltas);
// console.log(personasBajas);

console.log(personasCms);
