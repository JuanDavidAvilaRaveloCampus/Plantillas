export default {
    listado_total(){
        data(); 
    }
}

let data = async () =>{
    try {
        let res = await fetch('http://localhost:3000/reclutas');
        let data = await res.json();

        for (let i = 0; i < data.length; i++) {
            let id = data[i].id;
            let name = data[i].name;
            let last_name = data[i].last_name;
            let edad = data[i].edad;
            let num_id = data[i].num_id;
            let fecha_ingreso = data[i].fecha_ingreso;
            let id_team = data[i].id_team;
            let skills = data[i].skills;
            pintar([id,name,last_name,edad,num_id,fecha_ingreso,id_team,skills]);
        }   
    } catch (error){
        console.log(error);
    }
}

function pintar(p){
    document.querySelector('.tabla').insertAdjacentHTML('beforeend', `
        <tr>
            <td>${p[0]}</td>
            <td>${p[1]}</td>
            <td>${p[2]}</td>
            <td>${p[3]}</td>
            <td>${p[4]}</td>
            <td>${p[5]}</td>
            <td>${p[6]}</td>
            <td>${p[7]}</td>
            
        </tr>
    `)
};
