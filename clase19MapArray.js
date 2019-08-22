var miguel = {
    nombre: 'Miguel',
    apellido: 'Ramirez',
    altura: 1.91
}

var woody = {
    nombre: 'Woody',
    apellido: 'Wallas',
    altura: 1.31
}

var buzz = {
    nombre: 'Buzz',
    apellido: 'Lightgear',
    altura: 1.89
}

var venelope = {
    nombre: 'Venelope',
    apellido: 'De la Reguera',
    altura: 1.71
}

var john = {
    nombre: 'John',
    apellido: 'Snow',
    altura:  1.65
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