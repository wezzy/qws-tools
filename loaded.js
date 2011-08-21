
// Register the command
Q.Executor.register('loaded', function(){
	
	return {
		
		run: function(callback, args){	// Execution point
			callback(Q.Executor.getLoadedList());
		}
		
	}
	
});