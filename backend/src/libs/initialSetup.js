import { RoleModel } from '../models/role.model.js';

export const createRoles = async () => {
  try {
    const count = await RoleModel.countDocuments().exec();

    if (count > 0) return;

    const values = await Promise.all([
      new RoleModel({ name: 'user' }).save(),
      new RoleModel({ name: 'moderator' }).save(),
      new RoleModel({ name: 'admin' }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};
