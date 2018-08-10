exports.getSources = function(parameters) {
	
    return [{
		'location': '/template-application-openui5/ui/perspectives/extensions/perspective/perspective.extension.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/extensions/perspective/perspective.extension',
		'engine': 'velocity',
		'collection': 'uiPerspectives'
	}, {
		'location': '/template-application-openui5/ui/perspectives/extensions/perspective/perspective.js.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/extensions/perspective/perspective.js',
		'engine': 'velocity',
		'collection': 'uiPerspectives'
	}, {
		'location': '/template-application-openui5/ui/perspectives/extensions/view.extensionpoint.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/extensions/view.extensionpoint',
		'engine': 'velocity',
		'collection': 'uiPerspectives'
	}];
};