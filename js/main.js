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
                            background-color: #2D2D2D;
                            color: white;
                            text-align: center;
                            padding: 55px 15px;
                            position: relative;
                            width: 100%;
                            bottom: 0;
                            margin-top: 20px;
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