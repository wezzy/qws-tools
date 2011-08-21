http://query.yahooapis.com/v1/public/yql?q=SELECT * FROM flickr.photos.search WHERE text="Cat"

// Register the command
Q.Executor.register('yql', function(){
	
	var _url = "http://query.yahooapis.com/v1/public/yql?q=";
	
	var _help = function(callback){
		var out = "qws YQL client";
		out += "\nyql <query> to make a query";
		
		out += "\n-O swicth make the tool return js object instead of formatted string";
		out += "\n-H show this help message";
		
		callback(out)
	}
	
	return {
		
		run: function(callback, args){

			if(!args || args.length < 1) return _help(callback);
            if(args[0] == "-H") return _help(callback);
			
			// Everything without a - in the beginning is part of the query
			var query = [];
			for(var i = 0; i < args.length; i++){
				if(args[i].charAt(0) != "-") query.push(args[i]);
			}
			query = query.join(" ");
			
			var url = _url + query + "&format=json"; Q.log(url);
			jQuery.getJSON(url, function(data){
				
				var out;
				if(args.indexOf('-O') < 0){
					out = data;
				}else{
					out = data;
				}
				
				callback(out);
			})
		}
		
	}
	
});