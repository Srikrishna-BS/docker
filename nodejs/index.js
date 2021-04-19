const express = require('express');

const app = express();
app.get('/', (req, res)=>{
    res.send("Loude nodu edna");
});

app.listen(8080, ()=>{
    console.log("Listening on this lawda port 8080");
});
