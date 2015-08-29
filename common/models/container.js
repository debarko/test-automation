module.exports = function(Container) {
	Container.beforeRemote('POST', function( ctx, modelInstance, next) { 
		var parseApk = require('apk-parser');
	 next();
	});
};