var miguel = {
  nombre: 'Miguel',
  apellido: 'Caberta',
  edad: 41,
  profesion: 'Desarrollador'
}

var juan = {
  nombre: 'Juanito',
  apellido: 'Ramirez',
  edad: 16,
  profesion: 'Estudiante'
}
function mayoriaEdad(persona) {
  return persona.edad >= 18
}

function imprimirMayoriaEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad porque tiene:  ${persona.edad} años. `);
  } else {
    console.log(`${persona.nombre} es menor de edad porque tiene:  ${persona.edad} años. `);
  }
}

imprimirMayoriaEdad(miguel)
imprimirMayoriaEdad(juan)

function imprimirMayoriaEdad1(persona) {
  if (mayoriaEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad porque tiene:  ${persona.edad} años. `);
  } else {
    console.log(`${persona.nombre} es menor de edad porque tiene:  ${persona.edad} años. `);
  }
}
