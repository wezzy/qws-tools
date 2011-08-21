
// Register the command
Q.Executor.register('help', function(){
	
	return {
		
		run: function(callback, args){
			
			
			Q.Executor.run('about', "", function(result){
				var out = "";
				out += result;
				out += "\n";
				out += "Available commands:\n";

				var list = Q.Executor.getList();
				for(var i = 0; i < list.length; i++){
					out += "<b>" + list[i] + "</b> - " + Q.Executor.getDescription(list[i]) + "\n";
				}
				
				callback(out);
				
			});
			
		}
		
	}
	
});