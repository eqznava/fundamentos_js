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

// function cumpleaños (persona){
//   persona.edad += 1
// }
/*****************************************************************/
function cumpleaños (persona){
  return{
    ...persona,
    edad: persona.edad + 1
  }
}

/*En esta funcion lo que se hace es crear un objeto nuevo a partir de uno
ya creado con los ... y pisamos el atributo edad, asi no afectamos el objeto principal*/

/****************************************************************/
