require('dotenv').config()

module.exports = {
	port: process.env.PORT || 8088,
	env: process.env.NODE_ENV || 'dev',
	externalApiBaseUrl: process.env.EXTERNAL_API_BASE_URL,
	externalApiKey: process.env.EXTERNAL_API_KEY
}
