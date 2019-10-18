var sergio={
  nombre:'Sergio',
  apellido:'Enriquez',
  edad:34,
  peso:90
}

console.log(`Al inicio del año ${sergio.nombre} ${sergio.apellido} pesa ${sergio.peso} kgs`)

const GANANCIA_O_PERDIDA = 0.3
const DIAS_DEL_AÑO = 365
const META = sergio.peso - 3

const aumentaDePeso = sergio => sergio.peso += GANANCIA_O_PERDIDA
const bajaDePeso = sergio => sergio.peso -= GANANCIA_O_PERDIDA
const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4

var dias = 0

while (sergio.peso > META) {
  if (comeMucho()) {
    aumentaDePeso(sergio)
  }
  if (haceDeporte()) {
    bajaDePeso(sergio)
  }
  dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${sergio.nombre} ${sergio.apellidoml} bajo 3 kgs`)

/*En el ciclo while lo que se hace es poner una condicion y repetir todo el bloque de codigo dentro de el while
 hasta que la condicion se cumpla*/
