const exp = require("constants");
const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const port = process.env.PORT || 5000;

// staticpath of static folder
const staticpath = path.join(__dirname,"../public");
// staticpath of the template folder
const templatepath = path.join(__dirname, "../templates/views")
// staticpath of the partials folder
const partialspath = path.join(__dirname, "../templates/partials")

// view engine
app.set("view engine", "hbs");
// to set the new view folder name
app.set("views", templatepath);
//  to register the partials 
hbs.registerPartials(partialspath)

// static web Page
app.use(express.static(staticpath));

// Routing
app.get("",(req,res)=>{
    res.render("index")
});
app.get("/about",(req,res)=>{
    res.render("about")
});
app.get("/weather",(req,res)=>{
    res.render("weather")
});
app.get("*",(req,res)=>{
    res.status(404).render("404",{
        errormsg: "OOPs Page Not Found"
    })
});

app.listen(port,()=>{
    console.log(`working on the port no ${port}`)
});
