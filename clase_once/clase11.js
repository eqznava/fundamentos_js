var sergio={
  nombre:'Sergio',
  apellido:'Enriquez',
  edad:34
}

var juan={
  nombre:'Juan',
  apellido:'Enriquez',
  edad:36
}

var felipe={
  nombre:'Felipe',
  apellido:'Enriquez',
  edad:38
}

var natalia={
  nombre:'Natalia',
  apellido:'Enriquez',
  edad:12
}

var fernanda={
  nombre:'Fernanda',
  apellido:'Enriquez',
  edad:10
}

const PARA_MAYORIA_EDAD = 18

function esMayorDeEdad(persona){
  return persona.edad >= PARA_MAYORIA_EDAD
}

function imprimirSiEsMayorDeEdad (persona){
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es MAYOR de edad`)
  }else {
    console.log(`${persona.nombre} es MENOR de edad`)
  }
}

imprimirSiEsMayorDeEdad(sergio)
imprimirSiEsMayorDeEdad(juan)
imprimirSiEsMayorDeEdad(felipe)
imprimirSiEsMayorDeEdad(natalia)
imprimirSiEsMayorDeEdad(fernanda)
