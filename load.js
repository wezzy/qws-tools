
// Register the command
Q.Executor.register('load', function(){
	
	return {
		
		run: function(callback, args){	// Execution point
			Q.Loader.load(args, function(result){
				callback(true);
			});
		}
		
	}
	
});