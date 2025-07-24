const express = require('express');
const port = 3000;

const app = express();

app.get("/", (req, res) =>{
    res.send("Hello PetShop!")
});

app.post("/register", (req, res) =>{
    res.sendStatus(201);
});
app.put("/user/Gian", (req, res) =>{
    res.sendStatus(200);
});

app.patch("/user/Gian", (req, res) =>{
    res.sendStatus(200);
});

app.delete("/user/Gian", (req, res) =>{
    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});