var express = require("express");
var app = express();
const port = process.env.PORT || 3000

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(port);
console.log("server run on https://localhost:" + port);

app.get("/", function(req, res){
    res.render("news");
})

app.get("/header", function(req, res){
    res.render("header");
})