
// Register the command
Q.Executor.register('loaded', function(){
	
	return {
		
		run: function(args){	// Execution point
			return Q.Executor.getLoadedList();
		}
		
	}
	
});