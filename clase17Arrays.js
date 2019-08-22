var miguel = {
    nombre: 'Miguel',
    apellido: 'Ramirez',
    altura: 1.91
}

var woody = {
    nombre: 'Woody',
    apellido: 'Wallas',
    altura: 0.31
}

var buzz = {
    nombre: 'Buzz',
    apellido: 'Lightgear',
    altura: 0.30
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