// var nombreMiguel = 'Miguel'
// var nombreJuan = 'Juan'

// function imprimirNomMay(nombre) {
//     nombre = nombre.toUpperCase()
//     console.log(nombre)
// }
// imprimirNomMay(nombreJuan)
// imprimirNomMay(nombreMiguel)

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

function imprimirNombre({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirNombre(Miguel)
imprimirNombre(Juan)
imprimirNombre({ nombre: 'juanito'})
