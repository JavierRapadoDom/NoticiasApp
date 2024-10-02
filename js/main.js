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
                            background-color: #f8f9fa;
                            padding: 20px;
                            text-align: center;
                            font-family: Arial, sans-serif;
                            font-size: 14px;
                            color: #333;
                             border-top: 1px solid #ddd;    
                        }
                        .footer-container {
                                max-width: 800px;
                                margin: 0 auto;
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

customElements.define('mi-footer', FooterCustom);