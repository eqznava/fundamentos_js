var sergio={
  nombre:'Sergio',
  apellido:'Enriquez',
  edad:34,
  peso:90
}

console.log(`Al inicio del año ${sergio.nombre} ${sergio.apellido} pesa ${sergio.peso} kgs`)

const GANANCIA_O_PERDIDA = 0.2
const DIAS_DEL_AÑO = 365

const aumentaDePeso = persona => persona.peso += GANANCIA_O_PERDIDA
const bajaDePeso = persona => persona.peso -= GANANCIA_O_PERDIDA


for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
  var random = Math.random()

  if (random <0.25) {
    aumentaDePeso(sergio)
  } else if(random <0.5){
    bajaDePeso(sergio)
  }
}

console.log(`A fin de año ${sergio.nombre} ${sergio.apellido} pesa ${sergio.peso.toFixed(1)} kgs`)
/*En el ciclo for se busca repetir una operacion hasta que se cumpla la condicion de iteracion*/

/***************************************MI EJERCICIO**********************************************/

// var nissan={
//   modelo:'Sentra',
//   año:2004,
//   gasolina:35
// }
//
// console.log(`Al inicio del recorrido el ${nissan.modelo} tendra ${nissan.gasolina} lts en el tanque`)
//
// const RECORRIDO = 100
// const GASTO = 0.2
//
// const gastaGasolina = (nissan) => nissan.gasolina -= GASTO
//
// for (var i = 1; i < RECORRIDO; i++) {
//
//    var random = Math.random()
//
//     if (random < 0.75) {
//       gastaGasolina(nissan)
//     }
// }
//
// console.log(`Al finalizar el recorrido el ${nissan.modelo} tendra ${nissan.gasolina.toFixed(1)} lts en el tanque`)

/**************************************************************************************************************/
