var express = require('express')
var cors = require("cors");
var app = express();

app.use(cors());
app.origin
app.listen(80, () => {
    console.log('server is listening!');
})

app.get("/", (req, res) =>{
    res.send("server is alive!");
});

app.get("/products", (req, res) => {
    res.send([
    {
        id: 1,
        name: "Tomato"
    },
    {id: 2,
    name: "Potato"},

    ])
});