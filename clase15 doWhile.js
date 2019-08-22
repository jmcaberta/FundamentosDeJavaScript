var contador = 0

const llueve = () => Math.random() < 0.25
var vez 
do {
    contador++
}while (!llueve()) {
    if (contador == 1){
        vez = "vez"
    }else{
        vez = "veces"
    }

    console.log(`Fui a ver si llovia ${contador} ${vez}`)
}