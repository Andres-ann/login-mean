import { PathologyModel } from '../models/Pathologies.model.js';

// Metodo para crear un registro
export const createPathology = async (req, res) => {
	try {
		const pathology = await PathologyModel.create(req.body);
		res.status(201).json(pathology);
	} catch (error) {
		res.status(500).json({ message: 'An error has ocurred.' });
	}
};

// Metodo para mostrar todos los registros
export const getPathologies = async (req, res) => {
	try {
		const pathologies = await PathologyModel.find();
		res.status(200).json(pathologies);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Metodo para mostrar un registro por ID
export const getPathologiesById = async (req, res) => {
	try {
		const { id } = req.params;
		const pathology = await PathologyModel.findById(id);
		if (!pathology) {
			return res.status(404).json(`Pathology with ID: ${id} not found`);
		}
		res.status(200).json(pathology);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Metodo para actualizar un registro por ID
export const updatePathologyById = async (req, res) => {
	try {
		const { id } = req.params;
		const pathology = await PathologyModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
		res.status(200).json(pathology);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Metodo para eliminar un registro por ID
export const deletePathologyById = async (req, res) => {
	try {
		const { id } = req.params;
		const pathology = await PathologyModel.findByIdAndDelete(id);
		if (!pathology) {
			return res.status(404).json(`Pathology with ID: ${id} not found`);
		}
		res.status(200).json('Pathology successfully deleted');
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
