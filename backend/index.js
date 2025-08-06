const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/orders', (req, res) => {
  console.log('Received order:', req.body);
  res.status(200).json({ message: 'Order received!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // ✅ This enables CORS for all domains
app.use(express.json());

// Example route
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: "Olive Oil" },
    { id: 2, name: "Balsamic Vinegar" }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

