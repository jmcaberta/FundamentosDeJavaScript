var miguel = {
    nombre: 'Miguel',
    apellido:'Caberta',
    edad: '28',
    peso: '75'
}

//console.log(`Al inicio del año ${miguel.nombre} pesa  ${miguel.peso} Kg` );

const IncrementoPeso = 0.3
const DiasDElAño = 365

const aumentarPeso = persona => persona.peso += IncrementoPeso
const adelgazar = persona => persona.peso -= IncrementoPeso
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const Meta = miguel.peso - 3
var dias = 0

while (miguel.peso > Meta) {
    
    if (comeMucho()) {
        aumentarPeso(miguel)
    }
    if (realizaDeporte()) {
        adelgazar(miguel)
    }
    dias += 1
}

console.log(`Pasaron ${dias} hasta que ${miguel.nombre} adelgazo 3Kg.`)
// for (i = 1; i <= DiasDElAño; i++) {
//     var random = Math.random()
//     if (random < 0.25) {
//         aumentarPeso(miguel)
//     }else if (random < 0.5){
//         adelgazar(miguel)
//     }

// }

//console.log(`Al final del año ${miguel.nombre}, pesa ${miguel.peso.toFixed(1)} Kg`);


