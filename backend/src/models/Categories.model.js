import mongoose from 'mongoose';

//schema
const categorySchemma = new mongoose.Schema(
	{
		category: {
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
export const CategoryModel = new mongoose.model('Category', categorySchemma);
