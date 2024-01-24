const apiClient = require('../clients/echoClient')

const listFilesAndProcessData = async () => {
	try {
		const response = await apiClient.get('/files')
		return response.data.files
	} catch (error) {
		throw new Error('Error al obtener la lista de archivos')
	}
}

const getFileContent = async (file) => {
	try {
		const response = await apiClient.get(`/file/${file}`)
		return response.data
	} catch (error) {
		throw new Error(`Error al obtener contenido del archivo ${file}`)
	}
}

const processFileContent = (fileContent) => {
	const lines = fileContent.split('\n').map((line) => {
		const lineData = line.split(',')

		const isNumberValid = lineData[2] !== 'null' && !isNaN(lineData[2])
		const processedLine = {
			text: lineData[1],
			hex: lineData[3] !== 'null' ? lineData[3] : null
		}

		if (isNumberValid) {
			processedLine.number = parseInt(lineData[2])
		}

		return processedLine
	})

	return lines.filter(
		(line) => line !== null && Object.values(line).every((value) => value !== null)
	)
}

module.exports = {
	listFilesAndProcessData,
	getFileContent,
	processFileContent
}
