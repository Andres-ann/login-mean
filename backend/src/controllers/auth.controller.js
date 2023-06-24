import { UserModel } from '../models/User.model.js';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export const signup = async (req, res) => {
	const { username, email, password, role, active } = req.body;

	const newUser = new UserModel({
		username,
		email,
		password: await UserModel.encryptPassword(password),
		active,
	});
	const savedUser = await newUser.save();

	const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
		expiresIn: 28800, // 24 hours
	});
	res.status(200).json({ token });
};

export const signin = async (req, res) => {
	res.json('signin');
};
