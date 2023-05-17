


self.addEventListener('message',(e)=>{
    // console.log('aja');
    // console.log(message);
    postMessage(e.data);
    // Worker.terminate;
});
