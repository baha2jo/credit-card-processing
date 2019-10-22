const express = require('express');

const app = express();
const cards = require('./routes/api/cards');

app.get('/', (req, res) => res.send('API running'));

// Init Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/cards', cards);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

let obj = { name: 'rere' };

const { name } = obj;
