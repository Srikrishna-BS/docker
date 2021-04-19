const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();
app.get('/', (req, res)=>{
    client.get('visits',(err,visits)=>{
        res.send("number of visits"+visits);
        client.set('visits',parseInt(visits)+1);
    });
    res.send("Loude nodu edna");

});

app.listen(8081, ()=>{
    console.log("Listening on this lawda port 8081");
});
