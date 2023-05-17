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
        (e.type === 'submit') ? this.enviarWorker(e) : undefined;
        // console.log('a');
        // console.log(e);
    }

    enviarWorker(e) {
        e.preventDefault()
        
        this.form = this.shadowRoot.querySelector('form');
        this.form = Object.fromEntries(new FormData(e.target));
        console.log(this.form);
        // console.log(this.form);


        const ws = new Worker("/assets/Ws/ws_formulario_reclutas.js", {type : "module"})
        ws.postMessage(this.form);
        ws.addEventListener('message', (e) => {
            // console.log(e.data);
            Worker.terminate;
        })
    }

    connectedCallback() {
        Promise.resolve(myFormulario_reclutas.Components()).then(html => {
            this.shadowRoot.innerHTML = html;
            this.btn = this.shadowRoot.querySelector('form');
            this.btn.addEventListener('submit', this.handleEvent.bind(this));

        });
    };

};
customElements.define(name, myFormulario_reclutas);