
// Register the command
Q.Executor.register('set', function(){
	
	return {
		
		run: function(callback, args){
            args = args.join(" ");
			var params = $.trim(args).split("=");
			Q.variables[$.trim(params[0])] = $.trim(params[1]);
			
			callback(params[1]);
		}
		
	}
	
});