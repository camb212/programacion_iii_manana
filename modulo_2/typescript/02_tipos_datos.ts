let edad: number = 30;
let nombre: string = "Maria";
let activo: boolean = true;
let valor: any = 6;

if (edad > 18 && activo) {
    console.log('trabajo activo');
} else {
    console.log('No trabaja');
}

let frutas: string[] = ['manzanas', 'banana', 'orange'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
enum estado{
    Pendiente,
    Enviado,
    Entregado
}
console.log(estado);
console.log(estado.Entregado);