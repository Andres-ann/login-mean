import mongoose from 'mongoose';

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
export const roleModel = new mongoose.model('Role', roleSchemma);
