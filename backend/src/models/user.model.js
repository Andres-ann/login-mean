import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

// Esquema de usuario
const userSchema = new Schema(
	{
		username: {
			type: String,
			required: [true, 'Please complete this field'],
			unique: true,
		},
		email: {
			type: String,
			required: [true, 'Please complete this field'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please complete this field'],
		},
		active: {
			type: Boolean,
			default: true,
		},
		roles: [
			{
				ref: 'Role',
				type: Schema.Types.ObjectId,
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

// Métodos para cifrar y comparar contraseñas
userSchema.statics.encryptPassword = async function (password) {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async function (password, receivedPassword) {
	return await bcrypt.compare(password, receivedPassword);
};

// Modelo a partir del esquema
export const UserModel = mongoose.model('User', userSchema);
