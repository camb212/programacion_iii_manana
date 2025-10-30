class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    hacerSonido(){
        console.log("Realizar Algun ruidado")
    }
}

class perro extends  Animal{}
const miperro = new perro ('Toby');
const miAnimal = new Animal('Lucero');
miperro.hacerSonido();
miAnimal.hacerSonido();