const API_URL = 'https://swapi.co/api/';

const PEOPLE_URL = 'people/:id';

const opts = {crossDomain:true};



function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        
        $.get(url, opts, function (data) {
            resolve (data)
        })
        .fail(() => reject(id))
    })  
        
} 

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then(function (persona) {
        console.log(`El personaje 1 es: ${persona.name}`)
    })

    .catch(onError)

// obtenerPersonaje(1, function (persona) {    
//         console.log(`Hola, yo soy ${persona.name} `)    
// })


// $.get(url, opts, callback)
// .fail (() => {
//     console.log(`Sucedio un error no se pudo obtener el personaje ${id}`)
// }) 