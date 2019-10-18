var sergio ={
  nombre:'Sergio',
  apellido: 'Enriquez',
  edad: 34,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista:false,
  drone:true
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es: `)

  if (persona.ingeniero) {
    console.log('Ingeniero')
  }
    if (persona.cocinero) {
      console.log('Cocinero')
    }

      if (persona.cantante) {
        console.log('Cantante')
      }

        if (persona.dj) {
          console.log('DJ')
        }

          if (persona.guitarrista) {
            console.log('Guitarrista')
          }

            if (persona.drone) {
              console.log('Piloto de Drones')
            }
}

imprimirProfesiones(sergio)

/*********************************RETO***********************************/

function imprimirSiEsONoMayorDeEdad(persona){
  if (persona.edad >=18) {
    console.log(`${persona.nombre} es MAYOR de edad`);
  }else{
    console.log(`${persona.nombre} es MENOR de edad`);
  }
}

imprimirSiEsONoMayorDeEdad(sergio)

/************************************************************************/
