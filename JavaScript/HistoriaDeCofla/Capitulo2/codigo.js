// function sumarDosNumeros(num1,num2){
//     return num1 + num2;
// }

// document.write(sumarDosNumeros(4,7));

// const sumarTresNumeros = (num1,num2,num3) => {
//     return num1+num2+num3;
// }

// document.write(sumarTresNumeros(2,5,7))

// let nombre = prompt("Introduce tu nombre");

// saludo = saludar(nombre);

// document.write(saludo);

// function saludar(nombre){
//     return `Hola ${nombre}`
// }

/* Primer ejercicio 
let primeraPersona = true;

function validarEntrada(hora) {
  edad = prompt("Introduce tu edad: ");
  if (edad >= 18) {
    if (hora >= 2 && hora<=7 && primeraPersona) {
      alert(
        "felicidades, eres la primera persona después de las 2 así que entras gratis."
      );
      primeraPersona = false;
    } else {
      alert(
        `Son las ${hora}, puedes entrar pero tienes que pagar la entrada."`
      );
    }
  } else {
    alert("Lo siento amigo no puedes entrar.");
  }
}


validarEntrada(23);
validarEntrada(0.1);
validarEntrada(1.5);
validarEntrada(2.2);
validarEntrada(3.1);
validarEntrada(4.3);
*/

// let numeroDeAlumnos = prompt("¿Cuántos alumnos hay en clase?");
// let alumnos = [];

// for(let i=0; i<numeroDeAlumnos; i++){
//     alumnos[i]=[prompt("Introduce el nombre del alumno " + (i+1)),0]; // mete en la posición que marca la 'i' un vector de tamanio 2, donde la primera posición es el nombre y el segundo el número de asistencias
// }

// for(let i=0; i<6; i++){
//     for(let j=0; j<numeroDeAlumnos; j++){
//         let asistencia = prompt(`Presente (P) / Ausente (A) para el alumno ${alumnos[j][0]} del día ${i+1}`);
//         if(asistencia=='P' || asistencia=='p'){
//             alumnos[j][1]++;
//         }else{

//         }
//     }
// }

// function muestraAsistencia(nombre){
//     let faltas = 6 - alumnos[nombre][1];
//     if(faltas < 3){
//     document.write(`El alumno ${alumnos[nombre][0]}, ha asistido ${alumnos[nombre][1]} y ha faltado ${faltas} días a clase, así que <b style='color:green'>HA APROBADO</b><br>`);
//     }else{
//     document.write(`El alumno ${alumnos[nombre][0]}, ha asistido ${alumnos[nombre][1]} y ha faltado ${faltas} días a clase, así que <b style='color:red'>HA SUSPENDIDO</b><br>`);
//     }
// }

// for(indiceAlumno in alumnos){
//     muestraAsistencia(indiceAlumno);
// }

let operacion = prompt(
  "¿Qué operación quieres hacer? 1: suma, 2: resta, 3: multiplicar, 4: dividir:"
);

if (operacion == 1) {
  let num1 = parseInt(prompt("Introduce el número 1 para sumar:"));
  let num2 = parseInt(prompt("Introduce el número 2 para sumar:"));
  alert(`El resultado es: ${num1 + num2}`);
} else if (operacion == 2) {
  let num1 = parseInt(prompt("Introduce el número 1 para restar:"));
  let num2 = parseInt(prompt("Introduce el número 2 para restar:"));
  alert(`El resultado es: ${num1 - num2}`);
} else if (operacion == 3) {
  let num1 = parseInt(prompt("Introduce el número 1 para multiplicar:"));
  let num2 = parseInt(prompt("Introduce el número 2 para multiplicar:"));
  alert(`El resultado es: ${num1 * num2}`);
} else if (operacion == 4) {
  let num1 = parseInt(prompt("Introduce el número 1 para dividir:"));
  let num2 = parseInt(prompt("Introduce el número 2 para dividir:"));
  if (num2 == 0) {
    alert("No puedes dividir entre 0 cabrón, aprende mates");
  } else {
    alert(`El resultado es:  ${num1 / num2}`);
  }
} else {
  alert("Introduce un número válido perra");
}
