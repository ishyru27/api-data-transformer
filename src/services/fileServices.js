const apiClient = require('../clients/echoClient')

const getFileContentAndProcess = async (fileName) => {
	try {
		const response = await apiClient.get(`/file/${fileName}`)
		const fileContent = response.data
		const lines = processFileContent(fileContent)
		return {
			file: fileName,
			lines
		}
	} catch (error) {
		throw new Error(`Error al obtener contenido del archivo ${fileName}`)
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
	getFileContentAndProcess
}
