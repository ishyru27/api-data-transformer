module.exports = async () => {
	return {
		verbose: true,
		setupFiles: ['./setup-env.js'],
		collectCoverageFrom: [
			'**/*.js',
			'!**/node_modules/**',
			'!**/coverage/**',
			'!**/jest.config.js',
			'!**/setup-env.js',
			'!**/.eslintrc.js'
		],

		reporters: [
			'default',
			[
				'jest-sonar',
				{
					outputDirectory: 'reports',
					outputName: 'test-report.xml',
					reportedFilePath: 'absolute'
				}
			]
		]
	}
}
