import express from 'express';
import { createServer } from 'http';
import sirv from 'sirv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import es6Renderer from 'express-es6-template-engine';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = resolve(__dirname, 'build');

const app = express();

console.log('Building project...');
execSync('npm run build');

app.engine('html', es6Renderer);
app.set('views', PUBLIC_DIR);
app.set('view engine', 'html');

app.use(sirv(PUBLIC_DIR, { dev: true }));

app.get('*', (req, res) => {
  res.render('index');
});

const server = createServer(app);

server.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});