const express = require("express");
const app  = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.listen(8888,function(){
    console.log("starting port at 888");
})
app.get("/",function(req,res) {
    res.sendFile(__dirname+"/index.html")
    
});
app.post("/",function(req,res) {
    var num1 = (req.body.num1);
    var num2 = (req.body.num2);
    var result = num1+num2;
    res.send("hello dude" +result)
    
});