const axios = require('axios')
require('dotenv').config()

const apiClient = axios.create({
	baseURL: process.env.EXTERNAL_API_BASE_URL,
	headers: {
		Authorization: process.env.EXTERNAL_API_KEY,
		Accept: 'application/json'
	}
})

module.exports = apiClient
