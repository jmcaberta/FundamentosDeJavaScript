var miguel = {
    nombre: 'Miguel',
    apellido:'Caberta',
    edad: '28',
    peso: '75'
}

console.log(`Al inicio del año ${miguel.nombre} pesa  ${miguel.peso} Kg` );

const IncrementoPeso = 0.2
const DiasDElAño = 365

const aumentarPeso = persona => persona.peso += IncrementoPeso
const adelgazar = persona => persona.peso -= IncrementoPeso

for (i = 1; i <= DiasDElAño; i++) {
    var random = Math.random()
    if (random < 0.25) {
        aumentarPeso(miguel)
    }else if (random < 0.5){
        adelgazar(miguel)
    }

}

console.log(`Al final del año ${miguel.nombre}, pesa ${miguel.peso.toFixed(1)} Kg`);


