const express = require('express');
const { exec } = require('child_process');

const app = express();

app.use(express.json());

app.post('/sus', (req, res) => {
    const input = req.body.input;

    if (input.length > 100) {
        return res.status(400).json({ error: 'Input string is too long' });
    }

    exec(`python sus.py "${input}"`, (error, stdout) => {
        if (error) {
            return res.status(500).json({ error });
        }

        const result = parseInt(stdout);

        res.json({ result });
    });
});

app.listen(3000, () => console.log('API listening on port 3000'));
