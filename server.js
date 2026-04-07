const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// set EJS
app.set('view engine', 'ejs');

// static files (VERY important)
app.use(express.static('public'));

app.get('/images', (req, res) => {
  const images = [
    { file: 'Batman.jpg', title: 'Batman' },
    { file: 'La_La_Land_(film).png', title: 'La La Land' },
    { file: 'forestgump.jpg', title: 'Forrest Gump' },
    { file: 'captainamerica.jpg', title: 'Captain America' },
    { file: 'soul.jpg', title: 'Soul' },
    { file: 'harry_potter.jpg', title: 'Harry Potter' }
  ];

  res.render('images', { images });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});