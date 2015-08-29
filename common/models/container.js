module.exports = function(Container) {
	Container.beforeRemote('**', function( ctx, modelInstance, next) { 
		console.log('111');
		console.log(ctx);
		console.log(modelInstance);
	 next();
	});
};