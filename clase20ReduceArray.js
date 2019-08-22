var miguel = {
    nombre: 'Miguel',
    apellido: 'Ramirez',
    altura: 1.91,
    cantidadDeLibros: 56
}

var woody = {
    nombre: 'Woody',
    apellido: 'Wallas',
    altura: 1.31,
    cantidadDeLibros: 78
}

var buzz = {
    nombre: 'Buzz',
    apellido: 'Lightgear',
    altura: 1.89,
    cantidadDeLibros: 89
}

var venelope = {
    nombre: 'Venelope',
    apellido: 'De la Reguera',
    altura: 1.71,
    cantidadDeLibros: 45
}

var john = {
    nombre: 'John',
    apellido: 'Snow',
    altura:  1.65,
    cantidadDeLibros: 96
}

var personas = [miguel, woody, buzz, venelope, john]

for(i = 0; i < personas.length; i++)
{
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
}
//const esAlta = ({altura}) => altura > 1.80

// const esAlta = (persona) => {
//     return persona.altura > 1.80
//}
//var personasAltas = personas.filter(esAlta)

const pasarAlturaCms = persona => ({
    //persona.altura *= 100
    // return {
    //     ...persona,
    //     altura: persona.altura * 100
    // }    
        ...persona,
        altura: persona.altura * 100
    

})
var personasCms = personas.map(pasarAlturaCms)

console.log(personasCms)

// esta es una forma de hacer el conteo de libros con un metodo for
// var acum = 0

// for (var i = 0; i < personas.length; i++) {
//     acum = acum + personas[i].cantidadDeLibros
// }

// Esta es la misma funcion pero utilizando un arrow function
// const reducer = (acum, persona) => {
//     return acum + persona.cantidadDeLibros
// }

// El arrow function reducido
// const reducer = (acum, persona) =>  acum + persona.cantidadDeLibros

const reducer = (acum, { cantidadDeLibros }) =>  acum + persona.cantidadDeLibros


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)