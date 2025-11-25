console.log("Arreglos");


let numeros = [10, 20, 30, 40, 50];
let arrayVacio = new Array();
let arrayVacio2 = [];


console.log("arreglo de numeros original:", numeros);
console.log(arrayVacio);
console.log(arrayVacio2);
console.log("acceso a los elemntos del array numeros");
console.log(numeros[0]);
console.log(numeros[3]);




////////////////////////////////////////////////////////////////////////////////


console.log("modificar elementos al array");
numeros[0] = 300;
console.log(numeros);


console.log("Agregar elementos al final array");
numeros.push(600);
console.log(numeros);


console.log("Agregar elementos al inicio array");
numeros.unshift(888);
console.log(numeros);


console.log("Eliminar el primer elemento del array");
numeros.shift();
console.log(numeros);


console.log("Eliminar el ultimo elemento del array");
numeros.pop();
console.log(numeros);


////////////////////////////////////////////////////////////////////////////////


console.log("iteracion de array del array con while");


let indice = 0;
while (indice < numeros.length){
    console.log("valor", indice, "es:", numeros[indice]);
    indice++;
}


////////////////////////////////////////////////////////////////////////////////


console.log("iteracion de array del array con for");


for (let i=0; i < numeros.length; i++){
    console.log(numeros[i]);
}


////////////////////////////////////////////////////////////////////////////////


console.log("iteracion de array del array con for..of");


for (let valor of numeros){
    console.log(valor);
}


////////////////////////////////////////////////////////////////////////////////


console.log("iteracion de array del array con for Each");


numeros.forEach(function(valor, indice){
    console.log(indice, valor);
});


////////////////////////////////////////////////////////////////////////////////





