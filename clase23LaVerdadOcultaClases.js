function HeredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}


function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido 
    this.altura = altura   
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura} mts.`)
}

//Funcion original del prototipo soyAlto
 Persona.prototype.soyAlto = function () {
     return this.altura > 1.80
 }

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

Desarrollador.prototype.saludar = function ()
 {
     console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura} mts.`)
 }   

HeredaDe(Desarrollador, Persona)

// var miguel = new Persona('Miguel', 'Caberta', 1.80)
// var juan = new Persona('Juan', 'Ramirez', 1.91)
// var samantha = new Persona('Samantha', 'Villalobos', 1.67)
// var nathalia = new Persona ('Nathalia', 'Mejia', 1.59)

