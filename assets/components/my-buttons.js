let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class myButtons extends HTMLElement {
    static async Components(){
        return await ( await fetch(pathName.replace('.js','.html'))).text();
    }

    constructor(){
        super();    
        this.attachShadow({ mode : 'open'});
        
        
        console.log('im here beatches');
    }

    handleEvent(e){
        (e.type === 'click') ? this.enviarWorker(e) : undefined;
    }

    enviarWorker(e){
        // console.log(e.explicitOriginalTarget.id);
        e.preventDefault();

        if (e.target.id == 'btn_mes'){
            console.log(e.target.id);    
        } else if (e.target.id == 'btn_team') {
            console.log(e.target.id);
        } else if (e.target.id == 'btn_modulos') {
            console.log(e.target.id);
        } else if (e.target.id == 'btn_menores') {
            console.log(e.target.id);
        } else if (e.target.id == 'btn_estudios') {
            console.log(e.target.id);
        } 

        
    }


    connectedCallback(){
        Promise.resolve(myButtons.Components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.myBoton1 = this.shadowRoot.querySelector('#btn_mes');
            this.myBoton2 = this.shadowRoot.querySelector('#btn_team');
            this.myBoton3 = this.shadowRoot.querySelector('#btn_modulos');
            this.myBoton4 = this.shadowRoot.querySelector('#btn_menores');
            this.myBoton5 = this.shadowRoot.querySelector('#btn_estudios');


            this.myBoton1.addEventListener('click', this.handleEvent.bind(this));
            this.myBoton2.addEventListener('click', this.handleEvent.bind(this));
            this.myBoton3.addEventListener('click', this.handleEvent.bind(this));
            this.myBoton4.addEventListener('click', this.handleEvent.bind(this));
            this.myBoton5.addEventListener('click', this.handleEvent.bind(this));
            // console.log();
        })
    }


}
customElements.define(name, myButtons);