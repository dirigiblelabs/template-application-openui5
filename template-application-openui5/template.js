exports.getTemplate = function() {
	return {
		'name': 'Full-stack Application (OpenUI5)',
		'description': 'Full-stack Application with a Database Schema, a set of REST Services and an OpenUI5 User Interfaces',
		'model':'true',
		'sources': [{
			'location': '/template-application-openui5/api/application.js.template', 
			'action': 'generate',
			'rename': 'api/{{fileName}}.js',
			'collection': 'dataModels'
		}],
		'parameters': []
	};
};