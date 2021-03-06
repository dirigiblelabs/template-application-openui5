/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
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
