
Q.tools._index = {
	
	about: { // This must be the same name of the file about tools load about.js
		description: "Show information about QWS"	// HTML is allowed
	},
	
	calc: { 
		description: "Calc <expression> to execute math calcs"
	},
	
	echo: {
		description: "Return it's input as a result, if a string is prefixed with $ echo try load the value setted with 'set'",
		dependencies: ["set"]
	},
	
	help: {
		description: "Shows this help",
		dependencies: ["about"]
	},
	
	set: {
		description: "Store a value in qws memory &lt;identifier&gt;=&lt;value&gt;. This returns the saved value",
		dependencies: ["echo"]
	},
	
	load: {
		description: "Force the loading of a tool"
	},
	
	loaded: {
		description: "Return the list of loaded tools"
	}, 
	
	define: {
		description: "Parse the code and return and object, useful with pipes.\n For example 'define {a:1}' returns a new object with an attribute 'a' with value 1"
	},
	
	tw:{
		description: "Twitter client, tw help for more info"
	}
	
};