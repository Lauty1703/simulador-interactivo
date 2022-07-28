//ejercicio de promedio de trimestres
/*
MJEINGRESO();

let resultado;

let num1 = parseFloat(prompt('ingrese su nota del primer trimestes'));
let num2 = parseFloat(prompt('ingrese su nota del segundo trimeste'));
let num3 = parseFloat(prompt('ingrese su nota del tercer trimeste'));




if (num1 <= 10&&num2 <= 10 &&num3 <= 10 &&  num1 >= 7&&num2 >= 7 &&num3 >= 7 ) {
  resultado = promedio(num1,num2,num3);
  alert('felicidades has terminado el año con el promedio de: ' + resultado)
}
else if(num1 < 7&&num2 < 7 &&num3 < 7 &&  num1 >= 4&&num2 >= 4 &&num3 >= 4){
  resultado = promedio(num1,num2,num3);
  alert('te falto poco pero tenes que ir a finales tu promedio fue de: ' + resultado) 
}else{
  resultado = promedio(num1,num2,num3);
  alert('tenes que recursar la materia tu promedio fue de: '+resultado)
}

function MJEINGRESO() {
    alert('conozca su promedio, acontinuacion le solicitaremos las notas de los siguientes trimestres');
  }

function promedio(num1, num2, num3){
   resu = (num1 + num2 + num3) / 3;
   return resu;
}

*/



//ejercico de simulacio de extracion y deposito en un cajero
const mjeingreso = 'ingrese su usuario (su usuario es el nombre y apellido) ';
const ingresoContraseña = 'ingrese su contraña: ( 1703 )';
const finProceso = ' muchas gracias por confiar en nosotros: fin del proceso';
let text;
let resuDeposito;
let usuario;
let contraseña;


usuario = prompt(mjeingreso);
contraseña = prompt(ingresoContraseña);

if (usuario === 'Marco Perez' && contraseña === '1703') {


    text = prompt('BIENVENIDO USUARIO "' + usuario + '" USTED DESEA (DEPOSITAR) O (EXTRAER) DINERO');


    while (text === 'EXTRAER' || text === 'extraer') {

        extraer(usuario + finProceso);
        break;

    }
    while (text === 'DEPOSITAR' || text === 'depositar') {

        num = parseInt(prompt('Su cuenta corriente en pesos es de $100.000 \n Cuanto dinero piensa depositar en la cuenta'))
        if (num > 0) {
            alert('desea depositar la suma de $' + num + ' si es asi presiones aceptar ')
            alert('usted a depositado la cantidad de $' + num)
            resuDeposito = 100000 + num;
            alert('su saldo actual es de $' + resuDeposito)
            alert(usuario + finProceso)
        }
        else {
            alert('deposito no valido ingrese valores mayores a "0" por favor')
        }
        break

    }
}
else {
    alert('el usuario o la contraseña no son correctos')
}
function extraer(fin) {
    num = parseInt(prompt('Su cuenta corriente en pesos es de $100.000 \n cuanto dinero piensa sacar de la cuenta'))
    if (num < 100000) {
        alert('desea sacar la suma de $' + num + ' si es asi presiones aceptar ')
        alert('usted a sacado la cantidad de $' + num)
        resuExtraccion = 100000 - num;
        alert('su saldo actual es de $' + resuExtraccion)
        alert(fin);
    }
    else {
        alert('usted no puede sacar esa cantidad de dinero')

    }
}
