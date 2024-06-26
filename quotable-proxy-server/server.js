const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); 

app.get('/random-quote', async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

