'use strict';

const mysqlx = require('@mysql/xdevapi');

const options = {
	host: 'localhost',
	port: 33060,
	password: 'Abc@123DB',
	user: 'thedoan',
	schema: 'world_x'
};
// Connect to server localhost
mysqlx
	.getSession(
		{
			user: 'thedoan',
			password: 'Abc@123DB',
			host: 'localhost',
			port: '33060'
		}
	)
	.then(
	function (session) {
		var db = session.getSchema('world_x');
		// Use the collection 'countryinfo'
		var myCountryColl = db.getCollection('countryinfo');
		// Specify which document to find with Collection.find()
		// and fetch it from the database with .execute()
		return myCountryColl
			.find('Name like :param')
			.limit(1)
		  .bind('param', 'France%')
		  .execute(function (doc) {
				console.log(doc);
			});
	}
	)
	.catch(function (err) {
		console.log(err);
	});
