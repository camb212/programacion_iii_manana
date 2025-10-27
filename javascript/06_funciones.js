console.log("funciones");

console.log("Forma clasica");
function saludar() {
    console.log("Hola desde una función clásica");
}

saludar();
console.log("Forma con parametros y retorno");
function sumar(a,b) {
    return a + b;
}
let resultado = sumar(4, 9);
console.log("La suma es ", resultado);


console.log("Funcion flecha");
const restar = (a, b) => {
    return a - b;

}
let resultadoResta = restar(9,5);
console.log("La resta es ", resultadoResta);


console.log("Función retorno directo");
const cuadrado = x => x * x;
console.log("cuadrado de 5:", cuadrado(5));


console.log("Función con parámetros por defecto");
function saludar(nombre, saludo="Hola") {
    return saludo + " " + nombre;
}
let saludo1 = saludar("Dario");
let saludo2 = saludar("Ana", "Buenos días");
console.log(saludo1);
console.log(saludo2);

//Determinar una funcion si un numero es par o impar
function esPar(numero) {
    return numero % 2 === 0;
}

console.log("¿8 es par?", esPar(8));
console.log("¿7 es par?", esPar(7));


//calcular el Area de un triangulo
function area(b,a) {
    return (b * a) / 2;
}
console.log("El área de un triángulo de base 5 y altura 10 es:", area(5, 10));





