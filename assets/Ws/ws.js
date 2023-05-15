self.addEventListener('message',(e)=>{
    // console.log('aja');
    let {message} = e.data;
    console.log(message);
    postMessage(e);
    // Worker.terminate;
});

// onmessage = (e) =>{
//     console.log("recibido");
//     let {message, data} = e.data;
//     console.log(message);
// }