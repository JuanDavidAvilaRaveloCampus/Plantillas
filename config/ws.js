self.addEventListener('message', (e) =>{
    postMessage(
        // user: e.user
        // password: e.password
        e.data
    );
});