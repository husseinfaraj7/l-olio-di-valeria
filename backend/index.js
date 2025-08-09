const express = require('express');
const cors = require('cors');
const app = express();

// ✅ Allow your frontend to make requests
app.use(cors({
  origin: 'https://l-olio-di-valeria-1.onrender.com/' // your frontend URL
}));

app.use(express.json());

// Example route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
