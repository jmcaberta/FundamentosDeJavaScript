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
  var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombre(Miguel)
imprimirNombre(Juan)
imprimirNombre({ nombre: 'juanito'})
