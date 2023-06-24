import express from 'express';
import morgan from 'morgan';
import pkg from '../../package.json' assert { type: 'json' };
import { createRoles } from '../libs/initialSetup.js';
import { RoleModel } from '../models/role.model.js'; // Importar RoleModel aquí

import categoriesRoutes from '../routes/categories.routes.js';
import authRoutes from '../routes/auth.routes.js';

const app = express();
createRoles();

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

app.use('/api/categories', categoriesRoutes);
app.use('/api/auth', authRoutes);

export default app;
