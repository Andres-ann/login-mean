import mongoose from 'mongoose';

export const ROLES = ['user', 'admin', 'moderator'];

//schema
const roleSchemma = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

//modelo a partir del esquema
export const RoleModel = new mongoose.model('Role', roleSchemma);
