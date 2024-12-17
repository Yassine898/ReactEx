const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// MongoDB connection
const url = 'mongodb://localhost:27017/site-ecom';
mongoose.connect(url)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Error connecting to MongoDB:', error));

app.use(express.json());
app.use(cors()); // Enable CORS for cross-origin requests

// Define User Schema
const User = mongoose.model('user', new mongoose.Schema({
    username: String,
    password: String,
}), 'users');

// POST route to create a new user
app.post('/api/users', async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        const newUser = new User({ username, password });
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        console.log('Error creating user:', error);
        res.status(500).json({ error: 'Error creating user' });
    }
});

// GET route to fetch users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({}, { _id: 0}); // exclude password from response
        res.status(200).json(users);
    } catch (error) {
        console.log('Error fetching users:', error);
        res.status(500).json({ error: 'Error fetching users' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
