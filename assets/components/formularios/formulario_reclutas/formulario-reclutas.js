let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js', '');

export default class myFormulario_reclutas extends HTMLElement {
    static async Components() {
        return await (await fetch(pathName.replace('.js', '.html'))).text();
    };
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    };

    handleEvent(e) {
        (e.type === 'click') ? this.enviarWorker(e) : undefined;
        // console.log('a');
    }

    enviarWorker(e) {
        e.preventDefault()

        
        const ws = new Worker ("assets/Ws/ws_formulario_reclutas.js", {type: 'module'});

        ws.postMessage({message : 'holi'});

        ws.addEventListener('message', (e) => {
            console.log(e.data);
            Worker.terminate;
        })
    }

    connectedCallback() {
        Promise.resolve(myFormulario_reclutas.Components()).then(html => {
            this.shadowRoot.innerHTML = html;
            this.btn = this.shadowRoot.querySelector('#btn');
            this.btn.addEventListener('click', this.handleEvent.bind(this));

        });
    };

};
customElements.define(name, myFormulario_reclutas);