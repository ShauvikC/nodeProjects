const express = require('express');
const app = express();
const port = 8000;
const hbs  = require('hbs');
const path = require('path');

// Built in middleware

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

// To set the view engines

app.set('view engine',"hbs");
app.set("views",templatePath); //To change the foldername from views to templates

hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.render("index");
});
app.get("/support", (req, res) => {
    res.render("support");
});
// app.get("/download", (req, res) => {
//     res.render("download");
// });
app.get("/premium", (req, res) => {
    res.render("premium");
});
app.get("*", (req, res) => {
    res.render('404', {
        errorComment: "Oops! Page not found..."
    });
});
app.listen(port, "", () => {
    console.log(`port number ${port} is working`);
});