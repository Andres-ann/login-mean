import mongoose from 'mongoose';

mongoose
	.connect('mongodb://127.0.0.1:27017/focus_db')
	.then((db) => console.log('DB is Connected'))
	.catch((error) => console.log(error));
