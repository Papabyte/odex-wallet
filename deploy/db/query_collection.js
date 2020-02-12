const MongoClient = require('mongodb').MongoClient
const argv = require('yargs').argv
const conf = require('../../conf.js')

const collection = argv.collection



let client, db

const query = async () => {
	try {
		client = await MongoClient.connect(conf.mongoUrl, { useNewUrlParser: true });
		db = client.db('odex')

		const response = await db.collection(collection).find().toArray()
		console.log(response)

	} catch (e) {
		console.log(e.message)
	} finally {
		client.close()
	}
}

query()