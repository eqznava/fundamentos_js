var sergio ={
  nombre:'Sergio',
  apellido:'Enriquez',
  edad: 34
}

var ruben ={
  nombre:'Ruben',
  apellido:'Tlaloc',
  edad: 304
}

function imprimirNombreEnMayuculas(persona){
  // var nombre = persona.nombre
  var {nombre} = persona
  console.log(nombre.toUpperCase())
}

/*****************************RETO*********************************/

function imprimirNombreYEdad(persona){
  var {nombre} = persona
  var {apellido} = persona
  var {edad} = persona
  console.log('Hola me llamo '+nombre+' '+apellido+' y tengo '+edad+' años');
  //Hola me llamo Sergio y tengo 34 años
}

/******************************************************************/
// imprimirNombreEnMayuculas(sergio)
// imprimirNombreEnMayuculas(ruben)

imprimirNombreYEdad(sergio)
imprimirNombreYEdad(ruben)
