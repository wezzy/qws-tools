
Q.tools._index = {
	
	about: { // This must be the same name of the file about tools load about.js
		description: "Show information about QWS"	// HTML is allowed
	},
	
	calc: { 
		description: "calc <expression> to execute math calcs"
	},
	
	echo: {
		description: "return it's input as a result, if a string is prefixed with $ echo try load the value setted with 'set'",
		dependencies: ["set"]
	},
	
	help: {
		description: "shows this help",
		dependencies: ["about"]
	},
	
	set: {
		description: "store a value in qws memory &lt;identifier&gt;=&lt;value&gt;. This returns the saved value",
		dependencies: ["echo"]
	},
	
	load: {
		description: "Force the loading of a tool"
	},
	
	loaded: {
		description: "Return the list of loaded tools"
	}
	
};