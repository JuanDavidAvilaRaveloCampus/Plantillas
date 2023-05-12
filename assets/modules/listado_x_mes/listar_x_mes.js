export default {
    listado_x_mes(){
        // let buscar = document
        let formulario = document.querySelector('form');
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            formulario = Object.fromEntries(new FormData(e.target))
            console.log(formulario);
        });

        console.log(formulario);
        document.querySelector('.listar_x_mes').addEventListener('click', (e)=>{
            
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
                        let search = [id,name,last_name,edad,num_id,fecha_ingreso,id_team,skills];
                        pintar(search.filter(search => search == ""))
                    }
                    console.log(data);
                } catch (error){
                    console.log(error);
                }
            }
        })
    }
}

// let form = document.querySelector('form')

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     form = Object.fromEntries(new FormData(e.target));
//     console.log(form);
// })