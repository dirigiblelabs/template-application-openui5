var manageTemplate = require('template-application-openui5/template/ui/manage');
var perspective = require('template-application-openui5/template/ui/perspective');
var launchpad = require('template-application-openui5/template/ui/launchpad');
var tiles = require('template-application-openui5/template/ui/tiles');

exports.getSources = function(parameters) {
    var sources = [];
    sources = sources.concat(manageTemplate.getSources(parameters));
    sources = sources.concat(perspective.getSources(parameters));
    sources = sources.concat(launchpad.getSources(parameters));
    sources = sources.concat(tiles.getSources(parameters));
    return sources;
};
