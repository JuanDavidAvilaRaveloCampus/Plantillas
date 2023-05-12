function pintar (p) {
    // return console.log(p);

    for (let i = 0; i < p.length; i++) {

        let id = p[i].id;
        let name = p[i].name;
        let last_name = p[i].last_name;
        let edad = p[i].edad;
        let num_id = p[i].num_id;
        let fecha_ingreso = p[i].fecha_ingreso;
        let id_team = p[i].id_team;
        
        return [id,name,last_name,edad,num_id,fecha_ingreso,id_team];
        console.log(p.length);
    };
};


self.addEventListener('message', (e) =>{
    postMessage(
        pintar(e.data)
    );
    Worker.terminate;
});