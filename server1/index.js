
// const express = require("express");

// const port = 3000
// const app = express();

// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })
// app.listen(port,()=>{
//     console.log(`example app listening on port ${port}`)
// })
const express = require("express");
const port = 3001
const app = express();

app.get('/',function(req,res){
    res.send('hello world!');
})
app.listen(port)
