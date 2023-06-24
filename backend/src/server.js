import app from './config/app.js';
import './config/database.js';

const PORT = 3000;

app.listen(PORT);

console.log(`Server running on http://localhost:${PORT}`);
