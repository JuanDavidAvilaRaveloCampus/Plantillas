function data_form(p) {


   const skill = (e) => {
    let skills = []
    for(let item in e){
        item.includes('skill') ? skills.push(item) : undefined;
    }
    return skills
   }

    let formulario_recluta = {
        name: p.name,
        last_name: p.last_name,
        age: p.age,
        date: p.data,
        numero_identificacion: p.numero_identificacion,

        skills: skill(p)
    }



    console.log(formulario_recluta)

    // for (let i = 0; i < lista.length; i++) {
    //     console.log(log);
    // }
        // if (Element != 'undefined'){
        //     // formulario_recluta.skills.push(Element);
        // }
    // console.log(formulario_recluta);
    // console.log(lista.value);
    // let key = Object.keys(lista);
    // console.log(key);

    // let val = Object.values(lista);
    // console.log(val);

    // val.map((Element)=>{
    //     if (Element == 'on') {
    //         console.log(Element);
    //     }
    // })


    




    // for (let key in lista) {
    //     if (lista.hasOwnProperty(key)) {
    //         if (lista[key] == 'on'){
    //             console.log(`Key: ${key}, Value: ${lista[key]}`);
    //         }
    //     }
    // }
    // console.log(formulario_recluta.skills);
    // if (lista.skill_html == 'on'){
    //     formulario_recluta.skills.push({skill: lista.skill_html});
    // } else if (lista.skill_css == 'on') {
    //     formulario_recluta.skills.push({skill: lista.skill_css});
    // } else if (lista.skill_php == 'on') {
    //     formulario_recluta.skills.push({skill: lista.skill_php});
    // } else if (lista.skill_larabel == 'on') {
    //     formulario_recluta.skills.push({skill: lista.skill_larabel});
    // } else if (lista.skill_mysql == 'on') {
    //     formulario_recluta.skills.push({skill: lista.skill_mysql});
    // } else if (lista.skill_js == 'on') {
    //     formulario_recluta.skills.push({skill: lista.skill_js});
    // } else if (lista.skill_python == 'on') {
    //     formulario_recluta.skills.push({skill: lista.skill_python});
    // } else {
    //     alert('Elige alguna habilidad')
    // }
    // console.log(formulario_recluta.skills);
}




self.addEventListener('message', (e) => {
    // console.log('aja');
    // console.log(message);
    postMessage(data_form(e.data));
    // Worker.terminate;
});
