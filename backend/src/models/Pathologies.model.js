import mongoose from 'mongoose';

//schema
const pathologySchemma = new mongoose.Schema(
	{
		pathology: {
			type: String,
			required: [true, 'please complete this field'],
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

//modelo a partir del esquema
export const PathologyModel = new mongoose.model('Pathology', pathologySchemma);
