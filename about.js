
// Register the command
Q.Executor.register('about', function(){
	
	return {
		
		run: function(callback, args){	// Execution point
			var out = "";
			
			out += "Quick web shell\n";
			out += "&nbsp;&nbsp;&nbsp;&nbsp;version 0.2\n";
			out += "&nbsp;&nbsp;&nbsp;&nbsp;Copyright (c) <a href='http://www.artbits.it'>artBits snc</a> 2009\n";
			
			callback(out);
		}
		
	}
	
});