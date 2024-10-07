function cargarNoticias() {
    fetch("http://localhost:8080/mostrarNoticias")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return response.json();
      })
      .then((noticias) => {
        const tablaNoticias = document.getElementById("tabla-noticias");
        tablaNoticias.innerHTML = ""; // Limpiar la tabla antes de agregar nuevas filas
  
        noticias.forEach((noticia) => {
          const fila = document.createElement("tr");
          fila.innerHTML = `
                      <td>${noticia.id}</td>
                      <td>${noticia.titular}</td>
                      <td>${noticia.autor}</td>
                      <td>
                        <button type="button" class="btn btn-secondary">Modificar</button>
                        <button type="button" class="btn btn-danger" id="eliminar-${noticia.id}">Eliminar</button>
                      </td>
                  `;
          tablaNoticias.appendChild(fila);
        });
      })
      .catch((error) => {
        console.error("Error durante la petición:", error);
      });
  }



  document.addEventListener("DOMContentLoaded", function () {
    
    cargarNoticias();
  });
  