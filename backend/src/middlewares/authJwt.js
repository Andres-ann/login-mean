import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import { UserModel } from '../models/user.model.js';
import { RoleModel } from '../models/role.model.js';

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];

    if (!token)
      return res.status(403).json({ message: 'No access token provided' });

    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;

    const user = await UserModel.findById(req.userId, { password: 0 });
    if (!user) return res.status(403).json({ message: 'No user found' });

    next();
  } catch (error) {
    return res.status(401).json({ message: 'User unauthorized' });
  }
};

export const isModerator = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.userId);
    const roles = await UserModel.findById({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'moderator') {
        next();
        return;
      }
    }
  } catch (error) {
    return res.status(403).json({ message: 'Require Moderator role' });
  }
};

export const isAdmin = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    const roles = await UserModel.findById({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'admin') {
        next();
        return;
      }
    }
  } catch (error) {
    return res.status(403).json({ message: 'Require Admin role' });
  }
};
