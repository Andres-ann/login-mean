import express from 'express';
import morgan from 'morgan';
import pkg from '../../package.json' assert { type: 'json' };

import pathologiesRoutes from '../routes/pathologies.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

//Configuracion de data para la ruta raiz
app.set('pkg', pkg);

app.get('/', (req, res) => {
	res.json({
		name: app.get('pkg').name,
		author: app.get('pkg').author,
		description: app.get('pkg').description,
		version: app.get('pkg').version,
	});
});

app.use('/api/pathologies', pathologiesRoutes);

export default app;
