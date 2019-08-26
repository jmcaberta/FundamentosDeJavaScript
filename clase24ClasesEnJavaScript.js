class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura} mts.`)
    }

    soyAlto() {
        return this.altura > 1.80
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
        
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
    }
    soyAlto(){

    }
}








// var miguel = new Persona('Miguel', 'Caberta', 1.80)
// var juan = new Persona('Juan', 'Ramirez', 1.91)
// var samantha = new Persona('Samantha', 'Villalobos', 1.67)
// var nathalia = new Persona ('Nathalia', 'Mejia', 1.59)
