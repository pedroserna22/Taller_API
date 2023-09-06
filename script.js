/*EXPLICACION
Se declara una variable global que es la que va realizar el seguimiento del ID del personaje que se mostrara
Se define una funcion para obtener el personaje, que obtiene un id como parametro
Dentro de esta se define una constante con la url de la API + el ID
Dentro del fetch se realiza una solicitud get a la API
Luego en el then se procesa la respuesta para poder mostrar la imagen,nombre, especie y origen
Posterior a eso se hace una funcion para mostrar los personajes en orden, para esto se le va sumando uno a la variable antes definida
Y por ultimo se agrega un evento al boton, que sera el encargado de obtener y mostrar el personaje */

let personajeActual = 1; 

// Funcion para obtener y mostrar información de un personaje de Rick and Morty
function obtenerPersonajeRickAndMorty(id) {
    // API de Rick and Morty concatenada con el id
    const url = 'https://rickandmortyapi.com/api/character/' + id;
    fetch(url)
        .then(response => response.json())
        .then(personaje => {
            document.getElementById('imagen').src = personaje.image; // Establecer la imagen
            document.getElementById('nombre').textContent = personaje.name; // Nombre
            document.getElementById('especie').textContent = personaje.species; // Especie
            document.getElementById('origen').textContent = personaje.origin.name; // Origen
        })
        .catch(error => {
            console.error('Error al obtener información del personaje:', error); // Mensaje de error en caso de fallo
        });
}

// Funcion para obtener el siguiente personaje en orden
function obtenerSiguientePersonaje() {
    obtenerPersonajeRickAndMorty(personajeActual);
    personajeActual++;
}

// Darle un evento al boton para obtener un personaje
document.getElementById('boton').addEventListener('click', obtenerSiguientePersonaje);