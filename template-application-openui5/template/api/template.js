exports.getSources = function(parameters) {
	var sources = [];
	sources = sources.concat(getApi(parameters));
	sources = sources.concat(getLaunchpadApi(parameters));
	return sources;
};

function getApi(parameters) {
	return [{
		'location': '/template-application-openui5/api/http.js.template', 
		'action': 'copy',
		'rename': 'api/http.js',
	}, {
		'location': '/template-application-openui5/api/entity.js.template', 
		'action': 'generate',
		'rename': 'api/{{perspectiveName}}/{{fileName}}.js',
		'engine': 'velocity',
		'collection': 'models'
	}];
}

function getLaunchpadApi(parameters) {
	return [{
			'location': '/template-application-openui5/api/launchpad/menu.js.template', 
			'action': 'generate',
			'rename': 'api/launchpad/menu.js'
		}, {
			'location': '/template-application-openui5/api/launchpad/perspectives.js.template', 
			'action': 'generate',
			'rename': 'api/launchpad/perspectives.js'
		}, {
			'location': '/template-application-openui5/api/launchpad/tiles.js.template', 
			'action': 'generate',
			'rename': 'api/launchpad/tiles.js'
		}, {
			'location': '/template-application-openui5/api/launchpad/views.js.template', 
			'action': 'generate',
			'rename': 'api/launchpad/views.js'
		}];
};