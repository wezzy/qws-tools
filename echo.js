// Register the command
Q.Executor.register('echo', function(){
	
	return {
		
		run: function(callback, args){
			
            args = args.join(" ");
			var words = args.split(" ");

			for(var i = 0; i < words.length; i++){
				var w = words[i];
				if(w.charAt(0) == '$'){
					var variable = w.replace('$', '');
					if(Q.variables[variable]){
						args = args.replace(w, Q.variables[variable]);
					}
				}
			}
			
			callback(args);
			return;
		}
		
	}
	
});