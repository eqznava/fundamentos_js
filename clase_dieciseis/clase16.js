// var signo = prompt('¿Cúal es tu signo zodiacal?')
//
// switch (signo) {
//   case 'aries':
//     console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
//     'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
//     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'+
//     'aliquip ex ea commodo consequat.')
//     break
//   case 'tauro':
//     console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
//     'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
//     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'+
//     'aliquip ex ea commodo consequat.')
//     break
//   case 'geminis':
//     console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
//     'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
//     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'+
//     'aliquip ex ea commodo consequat.')
//     break
//   case 'cancer':
//     console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
//     'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
//     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'+
//     'aliquip ex ea commodo consequat.')
//     break
//   case 'leo':
//     console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
//     'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
//     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'+
//     'aliquip ex ea commodo consequat.')
//     break
//   case 'virgo':
//     console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
//     'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
//     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'+
//     'aliquip ex ea commodo consequat.')
//     break
//   case 'libra':
//     console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
//     'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
//     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'+
//     'aliquip ex ea commodo consequat.')
//     break
//   case 'escorpio':
//     console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
//     'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
//     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'+
//     'aliquip ex ea commodo consequat.')
//     break
//   case 'sagitario':
//     console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
//     'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
//     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'+
//     'aliquip ex ea commodo consequat.')
//     break
//   case 'capricornio':
//     console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
//     'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
//     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'+
//     'aliquip ex ea commodo consequat.')
//     break
//   case 'acuario':
//     console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
//     'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
//     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'+
//     'aliquip ex ea commodo consequat.')
//     break
//   case 'picis':
//     console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
//     'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
//     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'+
//     'aliquip ex ea commodo consequat.')
//     break
//
//   default:
//     console.log('Lo siento es una opcion invalida')
//     break
// }

var iniciar = alert('Hola esta calculadora sólo puede realizar operaciónes de DOS números')

var operacion = prompt('SUMA, RESTA, MULTIPLICACION, DIVISION y PORCENTAJE | Escriba la opción deseada:')

switch (operacion) {

  case 'SUMA':
  case 'Suma':
  case 'suma':
    var a = prompt('Ingrese el primer número: ')
    var b = prompt('Ingrese el segundo número: ')
    var num = parseFloat(a)
    var num2 = parseFloat(b)
    var c = num + num2
      alert(`El resultado de la suma es : ${c}`)
    break

  case 'RESTA':
  case 'Resta':
  case 'resta':
    var a = prompt('Ingrese el primer número: ')
    var b = prompt('Ingrese el segundo número: ')
    var num = parseFloat(a)
    var num2 = parseFloat(b)
    var c = num - num2
      alert(`El resultado de la resta es : ${c}`)
    break

  case 'MULTIPLICACION':
  case 'Multiplicación':
  case 'Multiplicacion':
  case 'multiplicación':
  case 'multiplicacion':
    var a = prompt('Ingrese el primer número: ')
    var b = prompt('Ingrese el segundo número: ')
    var num = parseFloat(a)
    var num2 = parseFloat(b)
    var c = num * num2
      alert(`El resultado de la multiplicación es : ${c}`)
    break

  case 'DIVISION':
  case 'División':
  case 'Division':
  case 'división':
  case 'division':
    var a = prompt('Ingrese el primer número: ')
    var b = prompt('Ingrese el segundo número: ')
    var num = parseFloat(a)
    var num2 = parseFloat(b)
    var c = num / num2
      alert(`El resultado de la división es : ${c}`)
    break

  case 'PORCENTAJE':
  case 'Porcentaje':
  case 'porcentaje':
    var a = prompt('Ingrese el número que representa el 100% : ')
    var b = prompt('Ingrese el número a calcular: ')

    var num = parseFloat(a)
    var num2 = parseFloat(b)
    var c = (num2 * 100)/num

      alert(`${num2} es el ${c.toFixed(2)} % de ${num}`)
    break

  default:
    alert('Esta opción no es valida 🙊 lo siento 🤗');

}
