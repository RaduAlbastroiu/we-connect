import { configApp } from './app.js';

const PORT = 3000;

// spin up server
const app = configApp();
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
