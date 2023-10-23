// server.js
const app = require('./app');

const PORT = process.env.PORT || 3000; // This is the important line

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${port}`);
});