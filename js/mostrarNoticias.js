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
          /*const dato1 = document.createElement("td");*/
          
          fila.innerHTML = `
                      <td>${noticia.id}</td>
                      <td>${noticia.titular}</td>
                      <td>${noticia.autor}</td>
                      <td>
                        <button type="button" class="btn btn-secondary">Modificar</button>
                        <input type="button" class="btn btn-danger" onclick="eliminarNoticia('${noticia.id}')" id="${noticia.id}" value="Eliminar"></input>
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
  