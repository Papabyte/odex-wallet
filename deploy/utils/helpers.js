const { tokenRanks } = require('../config')


const getNetworkID = () => {
	return process.env.testnet ? "testnet" : "livenet";
}


const getPairName = (baseTokenSymbol, quoteTokenSymbol) => {
	return `${baseTokenSymbol}/${quoteTokenSymbol}`
}

const getMongoURI = (user, password, environment) => {
	switch (environment) {
		case 'staging':
			return `mongodb+srv://${user}:${password}@ampstagingcluster0-qdjqg.mongodb.net/odex?retryWrites=true`
		case 'production':
			return `mongodb+srv://${user}:${password}@ampcluster0-xzynf.mongodb.net/odex?retryWrites=true`
		default: 
			return `mongodb+srv://${user}:${password}@ampcluster0-xzynf.mongodb.net/odex?retryWrites=true`
	}
}



const getPairRank = (baseTokenSymbol, quoteTokenSymbol) => {
	let baseTokenRank = tokenRanks[baseTokenSymbol] ? tokenRanks[baseTokenSymbol] : 0
	let quoteTokenRank = tokenRanks[quoteTokenSymbol] ? tokenRanks[quoteTokenSymbol] : 0

	return baseTokenRank + quoteTokenRank
}

module.exports = {
	getNetworkID,
	getMongoURI,
	getPairName,
	getPairRank
}