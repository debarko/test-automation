module.exports = function(Container) {
	Container.afterRemote('upload', function( ctx, modelInstance, next) { 
		console.log(modelInstance);
	 next();
	});
};