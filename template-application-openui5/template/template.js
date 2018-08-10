var apiTemplate = require('template-application-openui5/template/api/template');
var dataTemplate = require('template-application-openui5/template/data/template');
var uiTemplate = require('template-application-openui5/template/ui/template');

exports.getTemplate = function(parameters) {
	return {
		'name': 'Full-stack Application (OpenUI5)',
		'description': 'Full-stack Application with a Database Schema, a set of REST Services and an OpenUI5 User Interfaces',
		'model':'true',
		'sources': getSources(parameters),
		'parameters': [{
			'name': 'extensionName',
			'label': 'Extension',
			'placeholder': 'Extension name'
		}, {
			'name': 'brand',
			'label': 'Brand',
			'placeholder': 'Brand'
		}]
	};
};

function getSources(parameters) {
	var sources = [];
	sources = sources.concat(apiTemplate.getSources(parameters));
	sources = sources.concat(dataTemplate.getSources(parameters));
	sources = sources.concat(uiTemplate.getSources(parameters));
	return sources;
}