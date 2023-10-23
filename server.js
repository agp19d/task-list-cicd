// server.js
const app = require('./app');
let port = process.env.PORT;
if (port == null || port === "") {
  port = 3000; // default port to listen if there's nothing from the environment (for local development)
}
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});