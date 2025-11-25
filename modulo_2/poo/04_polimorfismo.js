class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar() {
        console.log("empleados trabajando");
    }
    calcularVacaciones() {
        return this.salario * 0.15;
    }
    horasExtras(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}

class Programador extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.10;
    }
}

class Diseñador extends Empleado {}

const progPedro = new Programador('Pedro', 2000);
const diseJuan = new Diseñador('Juan', 1200);

progPedro.trabajar();
diseJuan.trabajar();
console.log(progPedro.calcularVacaciones());
console.log(diseJuan.calcularVacaciones());
console.log(progPedro.horasExtras(5));
console.log(diseJuan.horasExtras(4));
