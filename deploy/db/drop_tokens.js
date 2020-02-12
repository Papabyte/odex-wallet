const MongoClient = require('mongodb').MongoClient
const conf = require('../../conf.js')


let client, db, response

const drop = async () => {
	try {
		client = await MongoClient.connect(conf.mongoUrl, { useNewUrlParser: true });
		db = client.db('odex')
		response = await db.dropCollection('tokens')
		console.log(response)
	} catch(e) {
		console.log(e.message)
	} finally {
		client.close()
	}
}

drop()