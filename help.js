
// Register the command
Q.Executor.register('help', function(){
	
	return {
		
		run: function(args){
			var out = "";
			
			out += Q.Executor.run('about');
			
			out += "\n";
			out += "Available commands:\n";
			
			var list = Q.Executor.getList();
			for(var i = 0; i < list.length; i++){
				out += "<b>" + list[i] + "</b> - " + Q.Executor.getDescription(list[i]) + "\n";
			}
			return out;
		}
		
	}
	
});