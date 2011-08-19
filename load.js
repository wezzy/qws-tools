
// Register the command
Q.Executor.register('load', function(){
	
	return {
		
		run: function(args){	// Execution point
			Q.Loader.load(args);
		}
		
	}
	
});