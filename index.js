'use strict'

var mongoose = require('mongoose');
var app = require('./app.js');
var port = 3800;

// Conexion Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://erick:123@ds247619.mlab.com:47619/pet-social')
		.then(() => {

			console.log("hola...La conexion a la base de datos pet-social se ha realizado correctamente")
			// crear servidor
			app.listen(port,() => {

				console.log("Servidor corriendo en Mlab :D")
			});
		})
		.catch(err => console.log(err));

		// Conexion a mi base local: mongodb://localhost:27017/curso_mean_social
		// Conexion a mi base de Mlab mongodb://erick:123@ds247619.mlab.com:47619/pet-social