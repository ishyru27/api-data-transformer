const express = require('express')
const router = express.Router()
const fileService = require('../services/fileServices')
const apiClient = require('../clients/echoClient')
const dataTransformerService = require('../services/dataTransformerService')

router.get('/files/data', async (req, res) => {
	const fileName = req.query.fileName
	
	if (fileName) {
		try {
			const transformedData = await fileService.getFileContentAndProcess(fileName)
			res.status(200).json(transformedData)
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	} else {
		try {
			const transformedData = await dataTransformerService.transformData()
			res.status(200).json(transformedData)
		} catch (error) {
			res.status(500).json({ error: 'Error interno del servidor' })
		}
	}
})

router.get('/files/list', async (req, res) => {
	try {
		const response = await apiClient.get('/files')
		res.status(200).json(response.data.files)
	} catch (error) {
		res.status(500).json({ error: 'Error al obtener la lista de archivos' })
	}
})

module.exports = router
