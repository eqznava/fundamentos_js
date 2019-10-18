var nombre = 'Sergio'

function imprimirNombreEnMayuculas(nombre){
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnMayuculas(nombre)


/*Para evitar el sideeffect o efecto colateral debemos agregar parametros a la
funcion, asi solo trabajaremos con los parametros de la funcion y no modificaremos
permanentemente las variables globales*/

/*Javascript tambien nos permite utilizar el mismo nombre de variable que
se encuentren en el alcance global en una FUNCION debido a que solo
existira dentro de la funcion*/
