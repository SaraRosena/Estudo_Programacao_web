const express = require("express");
const app =express();
const port = 3000

app.lister(port,()=>{
    console,log(`Server Running on post ${port}`)
})

