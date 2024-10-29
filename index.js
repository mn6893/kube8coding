// index.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory data storage
let items = [
    { id: 1, name: 'Item 1', description: 'This is the first item.' },
    { id: 2, name: 'Item 2', description: 'This is the second item.' },
    { id: 3, name: 'Item 3', description: 'This is the third item.' },
  ];
let currentId = 1;

// Routes

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Get item by ID
app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const item = items.find(i => i.id === parseInt(id));
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
});

// Create a new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  const newItem = { id: currentId++, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update an item
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const item = items.find(i => i.id === parseInt(id));
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  item.name = name;
  item.description = description;
  res.json(item);
});

// Delete an item
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex(i => i.id === parseInt(id));
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  items.splice(itemIndex, 1);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
