self.addEventListener('message',(e)=>{
    // console.log('aja');
    // console.log(message);
    let {message} = e.data;
    postMessage(message);
    // Worker.terminate;
});
