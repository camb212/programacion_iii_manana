let temperatura = 35;

if (temperatura > 30) {
    console.log("Hace calor");
}


let password = "pass12345";

if (password === "pass12345") {
    console.log("Usuario logueado");
} else {
    console.log("Acceso denegado");
}


let nota = 7;

if (nota >= 9) {
    console.log("Sobresaliente");
} else if (nota >= 6) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}



let edad = 20;
let tiene_licencia = true;

if (edad >= 18) {
    if (tiene_licencia) {
        console.log("Puede conducir");
    } else {
        console.log("Necesita licencia para conducir");
    }
} else {
    console.log("Es menor de edad");
}



//Estructura Switch

let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Inicia de semana");
        break;
    case "Viernes":
        console.log("Ultuimo día laboral");
        break;
    default:
        console.log("Dia normal");

}

// Comparar 3 variables - y mostrar la mayor
let numero1 = 25, numero2 = 18, numero3 = 32;
console.log(`El mayor es: ${Math.max(numero1, numero2, numero3)}`);






