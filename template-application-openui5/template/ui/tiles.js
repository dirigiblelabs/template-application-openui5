exports.getSources = function(parameters) {
	return [{
		'location': '/template-application-openui5/ui/perspectives/extensions/tile/tile.extension.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/{{name}}/extensions/tile/tile.extension',
		'collection': 'uiPrimaryModels'
	}, {
		'location': '/template-application-openui5/ui/perspectives/extensions/tile/tile.extension.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/{{name}}/extensions/tile/tile.extension',
		'collection': 'uiReportModels'
	}, {
		'location': '/template-application-openui5/ui/perspectives/extensions/tile/tile.js.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/{{name}}/extensions/tile/tile.js',
		'engine': 'velocity',
		'collection': 'uiPrimaryModels'
	}, {
		'location': '/template-application-openui5/ui/perspectives/extensions/tile/tile.js.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/{{name}}/extensions/tile/tile.js',
		'engine': 'velocity',
		'collection': 'uiReportModels'
	}];
};