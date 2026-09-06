const express = require("express");

const app = express();

const PORT = 3000;

// To receive JSON data
app.use(express.json());


// Activity 5: Custom Middleware - Logging Requests

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});


// Activity 1: GET

app.get("/students", (req, res) => {
    res.json({
        message: "Student details",
        name: "Vagdevi",
        branch: "AIML"
    });
});


// Activity 1: POST + Activity 2: Send and Receive JSON

app.post("/students", (req, res) => {
    const student = req.body;

    res.json({
        message: "Student added successfully",
        student: student
    });
});



app.put("/students/:id", (req, res) => {
    const id = req.params.id;
    const student = req.body;

    res.json({
        message: "Student updated successfully",
        id: id,
        student: student
    });
});




app.delete("/students/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: "Student deleted successfully",
        id: id
    });
});




app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});