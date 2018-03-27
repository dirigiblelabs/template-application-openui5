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
		}, {
			'location': '/template-application-openui5/api/shell/menu.js.template', 
			'action': 'generate',
			'rename': 'api/shell/menu.js'
		}, {
			'location': '/template-application-openui5/api/shell/perspectives.js.template', 
			'action': 'generate',
			'rename': 'api/shell/perspectives.js'
		}, {
			'location': '/template-application-openui5/api/shell/views.js.template', 
			'action': 'generate',
			'rename': 'api/shell/views.js'
		}, {
			'location': '/template-application-openui5/data/application.schema.template', 
			'action': 'generate',
			'rename': 'data/{{fileName}}.schema'
		}, {
			'location': '/template-application-openui5/extensions/menu/application.extension.template', 
			'action': 'generate',
			'rename': 'extensions/menu/{{fileName}}.extension',
			'collection': 'dataModels'
		}, {
			'location': '/template-application-openui5/extensions/menu/application.js.template', 
			'action': 'generate',
			'rename': 'extensions/menu/{{fileName}}.js',
			'collection': 'dataModels'
		}, {
			'location': '/template-application-openui5/extensions/perspective/application.extension.template', 
			'action': 'generate',
			'rename': 'extensions/perspective/home.extension'
		}, {
			'location': '/template-application-openui5/extensions/perspective/application.js.template', 
			'action': 'generate',
			'rename': 'extensions/perspective/home.js'
		}, {
			'location': '/template-application-openui5/extensions/point/menu.extensionpoint.template', 
			'action': 'generate',
			'rename': 'extensions/point/menu.extensionpoint'
		}, {
			'location': '/template-application-openui5/extensions/point/perspective.extensionpoint.template', 
			'action': 'generate',
			'rename': 'extensions/point/perspective.extensionpoint'
		}, {
			'location': '/template-application-openui5/extensions/point/view.extensionpoint.template', 
			'action': 'generate',
			'rename': 'extensions/point/view.extensionpoint'
		}, {
			'location': '/template-application-openui5/extensions/view/application.extension.template', 
			'action': 'generate',
			'rename': 'extensions/view/{{fileName}}.extension',
			'collection': 'dataModels'
		}, {
			'location': '/template-application-openui5/extensions/view/application.js.template', 
			'action': 'generate',
			'rename': 'extensions/view/{{fileName}}.js',
			'collection': 'dataModels'
		}, {
			'location': '/template-application-openui5/ui/manage/index.html.template', 
			'action': 'generate',
			'rename': 'ui/{{fileName}}/index.html',
			'start' : '[[',
			'end' : ']]',
			'collection': 'uiManageModels'
		}, {
			'location': '/template-application-openui5/ui/manage/manage.html.template', 
			'action': 'generate',
			'rename': 'ui/{{fileName}}/manage.html',
			'start' : '[[',
			'end' : ']]',
			'collection': 'uiManageModels'
		}, {
			'location': '/template-application-openui5/ui/list.html.template', 
			'action': 'generate',
			'rename': 'ui/{{fileName}}.html',
			'start' : '[[',
			'end' : ']]',
			'collection': 'uiListModels'
		}, {
			'location': '/template-application-openui5/ui/display.html.template', 
			'action': 'generate',
			'rename': 'ui/{{fileName}}.html',
			'start' : '[[',
			'end' : ']]',
			'collection': 'uiDisplayModels'
		}, {
			'location': '/template-application-openui5/ui/shell/message-hub.js.template', 
			'action': 'copy',
			'rename': 'ui/shell/message-hub.js'
		}, {
			'location': '/template-application-openui5/ui/shell/tmpl/menu.html.template', 
			'action': 'generate',
			'start' : '[[',
			'end' : ']]',
			'rename': 'ui/shell/tmpl/menu.html'
		}, {
			'location': '/template-application-openui5/ui/shell/tmpl/sidebar.html.template', 
			'action': 'copy',
			'rename': 'ui/shell/tmpl/sidebar.html'
		}, {
			'location': '/template-application-openui5/ui/shell/ui-bootstrap-tpls-0.14.3.min.js.template', 
			'action': 'copy',
			'rename': 'ui/shell/tmpl/ui-bootstrap-tpls-0.14.3.min.js'
		}, {
			'location': '/template-application-openui5/ui/shell/ui-core-ng-modules.js.template', 
			'action': 'generate',
			'rename': 'ui/shell/ui-core-ng-modules.js'
		}, {
			'location': '/template-application-openui5/ui/shell/ui-layout.js.template', 
			'action': 'generate',
			'rename': 'ui/shell/ui-layout.js'
		}, {
			'location': '/template-application-openui5/index.html.template', 
			'action': 'generate',
			'rename': 'index.html'
		}],
		'parameters': [{
			'name': 'extensionName',
			'label': 'Extension Name'
		}, {
			'name': 'brand',
			'label': 'Brand'
		}]
	};
};