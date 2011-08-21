// Register the command
Q.Executor.register('define', function(){
	
	return {
		
		run: function(callback, args){
			
            args = args.join(" ");
			var tmpResult;
			var code = "tmpResult = " + args;
			eval(code);

			callback(tmpResult);
	
		}
		
	}
	
});