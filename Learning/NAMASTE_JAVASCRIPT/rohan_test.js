import axios from 'axios';

const x = axios.get("https://jsonplaceholder.typicode.com/posts").then((e)=>{
    console.log(e);
}).catch(() => {console.log("error hai bahi");})

