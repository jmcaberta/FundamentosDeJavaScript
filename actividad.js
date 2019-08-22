var Miguel = {
    nombre: 'Miguel',
    apellido: 'Caberta',
    edad: 40
}

var Juan = {
    nombre: 'Juan',
    apellido: 'Ramirez',
    edad: 39
}

function imprimirNombre(persona) {
  var { nombre, apellido, edad } = persona
    console.log(`Hola me llamo ${nombre} y tengo  ${edad} años`)
}

imprimirNombre(Miguel)
imprimirNombre(Juan)
