let temperatura = 35;
if (temperatura > 30) {
    console.log("Hace calor");
}

let password = "pass123";
if (password === "pass12345") {
    console.log("Usuario logeado");
} else {
    console.log("Contraseña incorrecta");
}

let nota = 7;
if (nota > 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Acceso denegado");
} else {
    console.log("Reprobado");
}

let edad = 20;
let tiene_licencia = false;

if (!tiene_licencia) {
    console.log("Necesita licencia para conducir");
} else if (edad >= 18) {
    console.log("Puede conducir");
}


let dia="lunes";
switch (dia){
    case "lunes":
    console.log("Inicio de semana")
    break;
    case "viernes":
        console.log("Ultimo dia laboral")
        break;
    default:
        console.log("Dia Normal")
 
} 

let a = parseFloat(prompt("Ingrese el primer número:"));
let b = parseFloat(prompt("Ingrese el segundo número:"));
let c = parseFloat(prompt("Ingrese el tercer número:"));

let mayor = a;

if (b > mayor) {
    mayor = b;
}
if (c > mayor) {
    mayor = c;
}

alert("El número mayor es: " + mayor);
