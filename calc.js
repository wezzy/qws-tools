// Register the command
Q.Executor.register('calc', function(){
	
	return {
				
		run: function(callback, args){
			
			if(args == "" || !args){
				Q.Display.show("Usage: calc &lt;expression&gt;");
				return;
			}
			
            args = args.join(" ");
			args = args.replace("x", "*");
			
			var result = eval(args);
			callback(result);
		}
		
	}
	
});