import { UserModel } from '../models/User.model.js';
import { RoleModel } from '../models/role.model.js';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export const signup = async (req, res) => {
  const { username, email, password, roles, active } = req.body;

  const newUser = new UserModel({
    username,
    email,
    password: await UserModel.encryptPassword(password),
    active,
  });

  if (roles) {
    const foundRoles = await RoleModel.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await RoleModel.findOne({ name: 'user' });
    newUser.roles = [role._id];
  }

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, // 24 hours
  });
  res.status(200).json({ token });
};

export const signin = async (req, res) => {
  const userFound = await UserModel.findOne({ email: req.body.email }).populate(
    'roles'
  );

  if (!userFound)
    return res.status(400).json({ message: 'user or password is incorrect' });

  const mathPassword = await UserModel.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!mathPassword)
    return res.status(401).json({ message: 'user or password is incorrect' });

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400, // 24 hours
  });

  res.json({ token });
};
