const express = require('express');
const redis = require('redis');
const process = require('process');
const app = express();
const client = redis.createClient({
    host: 'redis',
    port: 6379
});
client.set('visists',0);

app.get('/', (req, res)=>{
    process.exit(0);
    client.get('visits',(err,visits)=>{
        res.send("number of visits"+visits);
        client.set('visits',parseInt(visits)+1);
    });
});

app.listen(8081, ()=>{
    console.log("Listening on this lawda port 8081");
});
