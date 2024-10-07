



function eliminarNoticia(id_a_eliminar) {

    var endpoint_eliminar_noticia = "http://localhost:8080/eliminarNoticia?id=";                     /* http://localhost:8080/eliminarNoticia?id= */

    endpoint_eliminar_noticia += id_a_eliminar; 

    fetch(endpoint_eliminar_noticia, {
        method: 'DELETE', // Especificamos el método de la peticiÃ³n
        headers: {
          'Content-Type': 'application/json' // Indicamos que los datos estÃ¡n en formato JSON
        }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
        }
          return response.json(); // Convertimos la respuesta en formato JSON
        })
        .then(data => {
          console.log('Respuesta del servidor:', data); // Aqui­ procesamos la respuesta del servidor
        })
        .catch(error => {
          console.error('Error durante la peticion:', error); // Manejo de errores
        });
    }





