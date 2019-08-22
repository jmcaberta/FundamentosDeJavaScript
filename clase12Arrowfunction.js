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

  const Mayoria_de_Edad = 18;

//   function esMayorDeEdad(persona){
//       return persona.edad >= Mayoria_de_Edad
//   }

//   var esMayorEdad = persona => {
//     return persona.edad >= Mayoria_de_Edad
//   }

  //var esMayorEdad = persona => persona.edad >= Mayoria_de_Edad

  var esMayorEdad = ({ edad }) => edad >= Mayoria_de_Edad
  
  function permitirAcceso(persona) {
    if(!esMayorEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}
  
 esMenorEdad = ( { edad }) => edad < Mayoria_de_Edad

 if(esMenorEdad > Mayoria_de_Edad) {
     console.log('Menor de Edad!!')
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

  
  