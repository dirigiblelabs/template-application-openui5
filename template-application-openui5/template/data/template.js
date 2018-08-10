exports.getSources = function(parameters) {
	return [{
		'location': '/template-application-openui5/data/application.schema.template', 
		'action': 'generate',
		'rename': 'data/{{fileNameBase}}.schema',
		'engine': 'velocity'
	}, {
		'location': '/template-application-openui5/data/dao/entity.js.template', 
		'action': 'generate',
		'rename': 'data/dao/{{perspectiveName}}/{{fileName}}.js',
		'engine': 'velocity',
		'collection': 'models'
	}];
};