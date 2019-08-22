var signo = prompt('Cual es tu signo?')

console.log(signo)

switch (signo) {
    case 'aries':
        console.log('Amor. Seguirás bajo el hechizo de la luna nueva. Mucho cuidado si decides declararte a alguien, puedes tener problemas de comunicación para expresar tus sentimientos. Si se malinterpretan tus intenciones podrías acabar teniendo ciertos problemas con tu posible pareja. Cuidado con las palabras y los gestos. ')
    break;
    case 'tauro':
        console.log('Amor. Descubrir que hay alguien más interesado por tu pareja, puede acabar siendo un detonante. No valoras lo que tienes hasta que te das cuenta de que puedes perderlo. Aplícate el cuento e intenta acabar con algunas dudas al respecto. No te dejes llevar por los primeros impulsos, busca la manera de conseguir acabar con los celos.')
    break;
    case 'Geminis':
        console.log('Amor. Tienes en el aire una de tus principales formas de expresión, hay momentos que dices una cosa y otros otra. Eso quiere decir que ni tu propia pareja, ni tú mismo puedes llegar a entenderte. Si hoy quieres decir algo importante, mejor espera o tendrás que llevar un traductor para poder hacerte entender. ')
    break;
    case 'cancer':
        console.log('Amor. Te descubrirás hoy como la persona más romántica del mundo. Crear un momento único será algo necesario para poder tener una cita muy especial. Muchas veces necesitamos este encuentro para encender mucho mejor esa pasión que rara vez nos embriaga. Hoy toca ponerse sexy y estar con alguien que te valore. ')
    break;
    case 'leo':
        console.log('Amor. Hay una cantidad de emociones que pueden llegar hasta ti. Estás en un momento perfecto para emprender una nueva relación, pero primero debes asegurarte de que todas las heridas estén bien cicatrizadas. No te costará emprender el camino del amor si sabes que es así, de otra manera será de lo más complicado.')
    break;
    case 'virgo':
        console.log('Amor. La rigidez con la que tratas a tu pareja puede acabar siendo algo realmente malo. Si no dejas que respire un poco ni en verano, vuestra relación puede estar condenada al fracaso. No crees horarios o momentos en los que no se puedan improvisar planes, todo lo que no se controla puede acabar siendo mucho mejor. ')
    break;
    case 'libra':
        console.log('Amor. Hoy puedes vivir ese instante mágico que estabas esperando. Utiliza tu buen hacer para conseguir generar algunos sentimientos especiales al lado de tu pareja. Con solo unas palabras agradables y una pequeña planificación obtendrás resultados realmente agradables. Es tu forma de amar lo que cambiará, ahora será mucho más sincera. ')
    break;
    case 'escorpion':
        console.log('Amor. Tienes una persona que realmente te quiere y por eso no es necesario que te sacrifiques más por alguien que no siente lo mismo que tú. Jugar correctamente con los sentimientos es algo que sabes hacer a la perfección. No malgastes más ese tiempo tan valioso pensando en cómo sería tu vida al lado de ese alguien. ')
    break;
    case 'sagitario':
        console.log('Amor. Tienes una serie de recursos sentimentales que debes controlar. Un incidente con tu familia te llevará a tener que atender algunas peticiones. Debes tener en cuenta todo lo que has hecho bien y mal, siempre estando de acuerdo con algunos elementos que no te favorecen en absoluto. No escojas entre pareja y familia, haz que ambos encajen en tu mundo. ')
    break;
    case 'capricornio':
        console.log('Amor. Tus ideas fijas puede que no terminen de encajar con los pensamientos de ciertas personas. Te enfrentas a una actitud que realmente no tiene porque ser siempre la misma. Si ves que hay espacio para algunas escenas románticas simplemente deja que pasen. Vas a encontrar la manera de que consigas acabar con esa rigidez. ')
    break;
    case 'acuario':
        console.log('Amor. Las palabras se las lleva el viento, solo con hechos consiguen cambiar por completo a algunas personas. Si ves que esa persona quiere algo más de ti, puedes dárselo. Ofrece una parte de ti que nadie más haya visto, esa actitud combativa y enérgica frente a un objetivo común. El éxito estará asegurado si emprendes el camino de la acción. ')
    break;
    case 'pisis':
        console.log('Amor. La novedad es algo atrayente, pero no siempre funciona. Hoy podrías sentir que hay alguien que te está atrayendo. El amor por lo desconocido siempre estará presente, pero no significa que debas responder. Si tienes a alguien a tu lado, no lo dejes, realmente te necesita. Si estás solo puedes aventurarte, no te pasará nada, solo perderás o ganarás tiempo. ')
        break;
    default:
        console.log('No es un Signo Zodiacal valido!!')
        break;
}