const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

app.use(express.static('public')); // Assuming your static files are in the 'public' directory

// Route to serve your HTML file
app.get('public/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Adjust the path as needed
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});