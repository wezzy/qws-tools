
// Register the command
Q.Executor.register('search', function(){
	
	var _apiKey = "ABQIAAAAc7XIyXq-YbjA17Nh85OyZBRi_j0U6kJrkFvY4-OX2XYmEAa76BTAawWgkuMiIVBoeGPPnc-qQmn7gA";
	
	var _searcher = null;
	
	var _help = function(callback){
		var out = "";
		out += "qws Google Search help\n";
		out += "search &lt;keyword&gt; - search google for the specified string\n";

		out += "-O swicth make the tool return js object instead of formatted string"
		out += "\n-H show this help message";
		callback(out);
	}
	
	return {
		
		run: function(callback, args){
			
			if(args[0] == "-H") return _help(callback);
			
			var url = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=";
			url += escape(args.join(" "));
			url += "&callback=?";
			
			$.getJSON(url, function(data){
				
				var out;
				
				if(args.indexOf("-O") < 0){
					var list = data.responseData.results;
				
					out = "<table>";
				
					for(var i = 0; i < list.length; i++){
						var r = list[i];
					
						out += "<tr style='font-size:11px'>";
						out += "<td>";
						out += "<a href='" + r.url + "' target='_blank'>";
						out += r.title;
						out += "</a>";
						out += "</td>";
						out += r.content;
						out += "<td>";
						out += "</td>";
						out += "</tr>";
					}
				
					out += "<table>";
				
				}else{
					out = data;
				}
				
				callback(out);
				
			});
				
			Q.Display.show("Loading ...");
		}

	}
	
});
