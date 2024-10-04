class FooterCustom extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});

        fetch('../footer.html')
            .then(response =>{
                if(!response.ok){
                    throw new Error('Error al cargar el pie de página');
                }
                return response.text();
            })
            .then(data => {
                const parser=new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const template = doc.querySelector('template');
                if(template){
                    const style = document.createElement('style');
                    style.textContent = `
                        footer {
                            background-color: #2c3e50;
                            padding: 20px;
                            text-align: center;
                            font-family: Arial, sans-serif;
                            font-size: 14px;
                            color: #ddd;
                             border-top: 1px solid #ddd;   
                        }
                        .footer-container { 
                                max-width: 800px;
                                margin: 0 auto;
                        }
                        .social-media img{
                          width: 6%;
                          height: 5%;
                          border-radius: 10px;
                          position: relative;
                        }
                    `;
                    this.shadowRoot.appendChild(style);
                    this.shadowRoot.appendChild(template.content.cloneNode(true));
                } else{
                    console.error('No se encontró la etiqueta <template> en footer.html');
                }
            })
            .catch(error => {
                console.error('Error al cargar el pie de página: ', error);
            })
    }
}
class NavBarCustom extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});

        fetch('../navbar.html')
            .then(response =>{
                if(!response.ok){
                    throw new Error('Error al cargar el navbar');
                }
                return response.text();
            })
            .then(data => {
                const parser=new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const template = doc.querySelector('template');
                if(template){
                    const style = document.createElement('style');
                    style.textContent = `
                    .navbar-nav .nav-link {
                        color: #000;
                        transition: color 0.3s ease;
                    }

                    .navbar-nav .nav-link:hover {
                        color: #f94ca4;
                    }

                    .containerMenu a {
                        font-family: "Rajdhani", sans-serif;

                    }

                    .header {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    `;
                    this.shadowRoot.appendChild(style);
                    this.shadowRoot.appendChild(template.content.cloneNode(true));
                } else{
                    console.error('No se encontró la etiqueta <template> en navbar.html');
                }
            })
            .catch(error => {
                console.error('Error al cargar el navbar: ', error);
            })
    }
}

customElements.define('mi-footer', FooterCustom);
customElements.define('mi-navbar', NavBarCustom);


document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchForm = document.getElementById('searchForm');
  
    searchIcon.addEventListener('click', function() {
      if (searchForm.classList.contains('active')) {
        searchForm.classList.remove('active');
      } else {
        searchForm.classList.add('active');
      }
    });
  });
  