var miguel ={
  nombre: 'Miguel',
  apllido: 'Caberta',
  edad: 41,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: true,
  guitarrista: true
}

function imprimirProfecion(persona) {
  console.log(`${persona.nombre} es:  `)

  if (persona.ingeniero) {
    console.log('ingeniero')
  }
 else {
    console.log('cocinero')
  }
  if (persona.cantante) {
    console.log('cantante')
  }
  if (persona.dj) {
    console.log('dj')
  }
  if(persona.guitarrista) {
    console.log('guitarrista')
  }
}

imprimirProfecion(miguel)
