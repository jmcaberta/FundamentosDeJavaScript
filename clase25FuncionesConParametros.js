class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        var { nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} ${apellido} y mido ${this.altura} mts.`)
        if(fn) {
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.80
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
        
    }
    saludar(fn) {
        // nombre = this.nombre
        // apellido = this.apellido
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador`)
        if(fn) {
            fn(nombre, apellido, true)
        }
    }
    soyAlto(){
        return this.altura > 1.80
    }
}

function respondeSaludo(nombre, apellido, esDev) {
    nombre = this.nombre
    apellido = this.apellido
    console.log(`Buen Dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ahh mira no sabia que eras Desarrollador/a!!`)
    }
}

 var miguel = new Persona('Miguel', 'Caberta', 1.80)
 var juan = new Desarrollador('Juan', 'Ramirez', 1.91)
 var samantha = new Persona('Samantha', 'Villalobos', 1.67)
 var nathalia = new Desarrollador ('Nathalia', 'Mejia', 1.59)

miguel.saludar()
juan.saludar(respondeSaludo)
samantha.saludar()
nathalia.saludar(respondeSaludo)