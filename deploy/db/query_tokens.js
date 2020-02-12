const MongoClient = require('mongodb').MongoClient
const conf = require('../../conf.js')


let client, db, response

const query = async () => {
	try {
		client = await MongoClient.connect(conf.mongoUrl, { useNewUrlParser: true });
		db = client.db('odex')

		const response = await db.collection('tokens').find().toArray()
		console.log(response)

	} catch (e) {
		console.log(e.message)
	} finally {
		client.close()
	}
}

query()