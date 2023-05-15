let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js', '');

export default class myHeader extends HTMLElement {
    static async Components() {
        return await (await fetch(pathName.replace('.js', '.html'))).text();
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // console.log('im here beatches');
    }

    handleEvent(e) {
        (e.type === 'click') ? this.enviarWorker(e) : undefined;
    }

    enviarWorker(e) {

        const ws = new Worker("/assets/Ws/ws_header.js")

        ws.postMessage({message : e.target.id});

        ws.addEventListener('message', (e) => {
            console.log(e.data);
            Worker.terminate;
        })

        // if (e.target.id == 'btn_mes') {




        //     console.log(e.target.id);
        // } else if (e.target.id == 'btn_team') {
        //     console.log(e.target.id);
        // } else if (e.target.id == 'btn_modulos') {
        //     console.log(e.target.id);
        // } else if (e.target.id == 'btn_menores') {
        //     console.log(e.target.id);
        // } else if (e.target.id == 'btn_estudios') {
        //     console.log(e.target.id);
        // }
    }

    connectedCallback() {
        Promise.resolve(myHeader.Components()).then(html => {
            this.shadowRoot.innerHTML = html;
            this.myBoton = this.shadowRoot.querySelectorAll('.btn');
            this.myBoton.forEach(element => {
                element.addEventListener('click', this.handleEvent.bind(this));
            });

        })
    }

}
customElements.define(name, myHeader);