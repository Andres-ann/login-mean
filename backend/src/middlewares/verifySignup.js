import { ROLES } from '../models/role.model.js';
import { UserModel } from '../models/user.model.js';

export const checkDuplicateuernameOrEmail = async (req, res, next) => {
  const user = await UserModel.findOne({ username: req.body.username });
  if (user) return res.status(400).json({ message: 'User already exists' });

  const email = await UserModel.findOne({ email: req.body.username });
  if (email) return res.status(400).json({ message: 'Email already exists' });

  next();
};

export const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res
          .status(400)
          .json({ message: `Role ${req.body.roles[i]} does not exists` });
      }
    }
  }
  next();
};
