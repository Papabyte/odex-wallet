const MongoClient = require('mongodb').MongoClient
const conf = require('../../conf.js')

const create = async () => {
	client = await MongoClient.connect(conf.mongoUrl, { useNewUrlParser: true });
	const db = client.db('odex')

	const response = await db.createCollection('tokens', {
		validator:  {
			$jsonSchema: 'object',
			required: [ 'symbol', 'asset', 'decimals'],
			properties:  {
				name: {
					bsonType: "string",
					description: "must be a string and is required"
				}
			}
		}
	});

	console.log(response)
}

create()
