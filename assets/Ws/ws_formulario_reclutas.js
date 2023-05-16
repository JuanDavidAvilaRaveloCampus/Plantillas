function data_form(p) {
    let name = p.name;
    let last_name = p.last_name;
    let age = p.age;
    let date = p.date;
    let numero_identificacion = p.numero_identificaciòn;

    // CHECKBOX
    let skill_html = p.skill_html;
    let skill_css = p.skill_css;
    let skill_php = p.skill_php;
    let skill_larabel = p.skill_larabel;
    let skill_mysql = p.skill_mysql;
    let skill_js = p.skill_js;
    let skill_python = p.skill_python;

    let lista = {
        skill_html: skill_html,
        skill_css: skill_css,
        skill_php: skill_php,
        skill_larabel: skill_larabel,
        skill_mysql: skill_mysql,
        skill_js: skill_js,
        skill_python: skill_python
    };

    let formulario_recluta = {
        name: name,
        last_name: last_name,
        age: age,
        date: date,
        numero_identificacion: numero_identificacion,

        skills: {

        }
    }

    // console.log(lista.value);
    let val = Object.values(lista);
    console.log(val);

    let key = Object.keys(lista);

    




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
