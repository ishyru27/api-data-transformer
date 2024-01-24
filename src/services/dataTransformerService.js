const dataService = require('../services/apiClientServices')

const transformData = async (fileName) => {
	try {
		const files = await dataService.listFilesAndProcessData()

		const transformedData = await Promise.all(
			files.map(async (file) => {
				if (fileName && fileName !== file) {
					return null
				}

				try {
					const fileContent = await dataService.getFileContent(file)
					const lines = dataService.processFileContent(fileContent)
					return {
						file,
						lines
					}
				} catch (error) {
					console.error(`Error al obtener contenido del archivo ${file}:`, error.message)
					return {
						file,
						lines: []
					}
				}
			})
		)

		return transformedData.filter((data) => data !== null)
	} catch (error) {
		throw new Error('Error al transformar los datos')
	}
}

module.exports = {
	transformData
}
