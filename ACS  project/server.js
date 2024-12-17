const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
const consumers = [
    { email: 'try', password: 'try' }
];
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const consumer = consumers.find(u => u.email === email && u.password === password);

    if (consumer) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});
 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
