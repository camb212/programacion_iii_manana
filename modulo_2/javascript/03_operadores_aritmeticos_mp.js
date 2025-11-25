console.log("Operadores Aritméticos en Historias Clínicas");


edadPaciente1 = 30;
edadPaciente2 = 45;


console.log("Suma de edades: ");
sumaEdades = edadPaciente1 + edadPaciente2;
console.log("Resultado:", sumaEdades);

console.log("Resta de edades: ");
restaEdades = edadPaciente1 - edadPaciente2;
console.log("Resultado:", restaEdades);

console.log("Multiplicación de edades: ");
multiplicacionEdades = edadPaciente1 * edadPaciente2;
console.log("Resultado:", multiplicacionEdades);

console.log("División de edades: ");
divisionEdades = edadPaciente1 / edadPaciente2;
console.log("Resultado:", divisionEdades);

console.log("Módulo de edades: ");
moduloEdades = edadPaciente1 % edadPaciente2;
console.log("Resultado:", moduloEdades);

console.log("Potencia de edades: ");
potenciaEdades = edadPaciente1 ** 2;
console.log("Resultado:", potenciaEdades);


console.log("Comparaciones:");
console.log("Edad igual a 30 ==:", 30 == edadPaciente1);
console.log("Edad estrictamente igual a 30 ===:", 30 === edadPaciente1);
console.log("Edad distinta !=:", 30 != edadPaciente2);
console.log("Edad estrictamente distinta !==:", 30 !== edadPaciente2);
console.log("Mayor que >:", edadPaciente2 > edadPaciente1);
console.log("Menor que <:", edadPaciente1 < edadPaciente2);
console.log("Mayor o igual >=:", edadPaciente2 >= edadPaciente1);
console.log("Menor o igual <=:", edadPaciente1 <= edadPaciente2);


console.log("Operadores lógicos:");
console.log("AND &&:", edadPaciente1 <= 30 && edadPaciente2 >= 40);
console.log("OR ||:", edadPaciente1 <= 30 || edadPaciente2 >= 50);
console.log("Negación !:", !(edadPaciente1 == 30));
