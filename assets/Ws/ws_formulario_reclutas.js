function data_form (p){
    let name = p.name;
    let last_name = p.last_name;
    let age = p.age;
    let date = p.date;
    let numero_identificacion = p.numero_identificaciòn;

    // skills
    // let skill = p.

    let skill_html = p.skill_html;
    let skill_css = p.skill_css;
    let skill_php = p.skill_php;
    let skill_larabel = p.skill_larabel;
    let skill_mysql = p.skill_mysql;
    let skill_js = p.skill_js;


    let skills = [
    ]

    return console.log(p);
}

self.addEventListener('message',(e)=>{
    // console.log('aja');
    // console.log(message);
    postMessage(e.data);
    // Worker.terminate;
});
