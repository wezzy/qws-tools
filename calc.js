// Register the command
Q.Executor.register('calc', function(){
	
	return {
				
		run: function(args){
			
			if(args == "" || !args){
				Q.Display.show("Usage: calc &lt;expression&gt;");
				return;
			}
			
            args = args.join(" ");
			args = args.replace("x", "*");
			return eval(args);
		}
		
	}
	
});