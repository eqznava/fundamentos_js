var sergio={
    nombre:'Sergio',
    apellido:'Enriquez',
    edad:34
}

var natalia={
    nombre:'Natalia',
    apellido:'Enriquez',
    edad:12
}

var jack={
    nombre:'Jackito',
    apellido:'Enriquez',
    edad:3
}

const PARA_MAYORIA_EDAD = 18

/*******Esto es una funcion normal*************/

// function esMayorDeEdad(persona){
//   return persona.edad >= PARA_MAYORIA_EDAD
// }

/**********************************************/

/************Esto es una funcion anonima asignada a una constante***/

// const esMayorDeEdad = function (persona){
//   return persona.edad >= PARA_MAYORIA_EDAD
// }

/********************************************************************/

/*********************Esta es una arrow function*********************/

// const esMayorDeEdad = persona => persona.edad >= PARA_MAYORIA_EDAD

/*Cuando se tiene un solo parametro se pueden obviar los parentesis
ademas de que si solo se va a regresar algo se pueden quitar las
llaves y la palabra return*/
/********************************************************************/

/*********Arrow function desestructurar el parametro*****************/

const esMayorDeEdad = ({edad}) => edad >= PARA_MAYORIA_EDAD

/*Como solo se va a tomar la edad de el objeto se desestructura el
parametro*/

/*********************************************************************/

/********************************RETO*********************************/

const esMenorDeEdad = ({edad}) => edad <=PARA_MAYORIA_EDAD

/*********************************************************************/

function acceso(persona){
  if (esMayorDeEdad(persona)){
    console.log(`${persona.nombre} tiene ${persona.edad} años, acceso CONCEDIDO`)
  }else {
    console.log(`${persona.nombre} tiene ${persona.edad} años, acceso DENEGADO`);
  }
}

function imprimirSiEsMayorDeEdad (persona){
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es MAYOR de edad`)
  }else {
    console.log(`${persona.nombre} es MENOR de edad`)
  }
}
