document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
  // Datos que queremos enviar en la petición POST
    const data = {
        id: document.getElementById('id-noticia').value ,
        titular: document.getElementById('titular-noticia').value ,
        autor: document.getElementById('autor-noticia').value ,
        contenido: document.getElementById('contenido-noticia').value
    };

// Realizamos la petición AJAX usando fetch
fetch('http://localhost:8080/createNoticia', {
    method: 'POST', // Especificamos el método de la peticiÃ³n
    headers: {
      'Content-Type': 'application/json' // Indicamos que los datos estÃ¡n en formato JSON
    },
    body: JSON.stringify(data) // Convertimos el objeto data a un string JSON
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
    location.reload();
});