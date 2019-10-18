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
/*Siempre que se desgloza un objeto por medio de las llaves en una function
debemos de tener en cuenta que se le debe de asignar el pobjeto cuando se llama la function
ya que de lo contrario no sabra de donde tomar ese valor*/


// function imprimirNombreEnMayuculas(persona){
//   // var nombre = persona.nombre.toUpperCase()
//   console.log(persona.nombre.toUpperCase())
// }

/*****************************************************************/
function imprimirNombreEnMayuculas({nombre}){
  console.log(nombre.toUpperCase())
}

/*Esta es una nueva forma de obtener el valor de la key de el objeto persona,
lo pedimos a travez de las {} en el parametro*/
/********************************************************************/


imprimirNombreEnMayuculas(sergio)
imprimirNombreEnMayuculas(ruben)

/********************************************************************/
imprimirNombreEnMayuculas({nombre:'Pepito'})
/*De esta forma podemos acceder al nombre y asignarle un nuevo valor*/
/*******************************************************************/
