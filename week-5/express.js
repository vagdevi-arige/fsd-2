const express = require("express");

const app = express();

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});




app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

app.get("/about", (req, res) => {
    res.send("This is About Page");
});

app.get("/contact", (req, res) => {
    res.send("This is Contact Page");
});




app.get("/student/:id", (req, res) => {
    const id = req.params.id;

    res.send(`Student ID is ${id}`);
});




app.get("/search", (req, res) => {
    const name = req.query.name;
    const branch = req.query.branch;

    res.send(`Student Name: ${name}, Branch: ${branch}`);
});