import { CategoryModel } from '../models/categories.model.js';

// Metodo para crear un registro
export const createCategory = async (req, res) => {
	try {
		const category = await CategoryModel.create(req.body);
		res.status(201).json(category);
	} catch (error) {
		res.status(500).json({ message: 'An error has ocurred.' });
	}
};

// Metodo para mostrar todos los registros
export const getCategories = async (req, res) => {
	try {
		const categories = await CategoryModel.find();
		res.status(200).json(categories);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Metodo para mostrar un registro por ID
export const getCategoriesById = async (req, res) => {
	try {
		const { id } = req.params;
		const category = await CategoryModel.findById(id);
		if (!category) {
			return res.status(404).json(`Category with ID: ${id} not found`);
		}
		res.status(200).json(category);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Metodo para actualizar un registro por ID
export const updateCategoryById = async (req, res) => {
	try {
		const { id } = req.params;
		const category = await CategoryModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
		res.status(200).json(category);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Metodo para eliminar un registro por ID
export const deleteCategoryById = async (req, res) => {
	try {
		const { id } = req.params;
		const category = await CategoryModel.findByIdAndDelete(id);
		if (!category) {
			return res.status(404).json(`Category with ID: ${id} not found`);
		}
		res.status(200).json('Category successfully deleted');
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
