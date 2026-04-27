const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://sahilkadu68_db_user:sahil123@cluster0.z9qqfcu.mongodb.net/expenseDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Test route
app.get('/', (req, res) => {
    res.send("Server Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});