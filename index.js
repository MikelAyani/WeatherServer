const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

app.get('/api', (req, res) => {
  console.log('GET /api called');
  res.send('Hello, GET request!');
});

app.post('/api', (req, res) => {
  console.log('POST /api called');
  const data = req.body;
  res.send(`Hello, POST request! You sent: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});
