const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

// Middleware (logging)
app.use((req, res, next) => {
    console.log('BeTechnified');
    next();
});

// POST /user
app.post('/user', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send("Missing data");
  }

  res.json({ message: `Hello, ${name}!` });
});

// GET /user/:id
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`User ${id} profile`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});