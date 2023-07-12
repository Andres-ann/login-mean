import app from './config/app.js';
import './config/database.js';

const PORT = 8000;

app.listen(PORT);

console.log(`Server running on http://127.0.0.1:${PORT}`);
