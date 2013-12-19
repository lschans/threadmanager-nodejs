// Declare process array and template
var processes = [];
var processTemplate = {file:null, pname:null, me:null, process:{}};

// Function that adds a process to the processlist
function addProcess(name, file) {
	console.log("Add process: " + name + " - " + file);
	processes[name] = processTemplate;
	processes[name].file = file;
	processes[name].pname = name;
}

// Start all our processes
function start() {
	// Loop and fork them all
	for (var key in processes) {
		// fork the process
		processes[key].process = require('child_process').fork(processes[key].file);
		processes[key].process.on('message', function(message){
			if(message === 'helloback') console.log(this.pname + ": Answer");
		});
	};
	console.log(processes);
}

// return a process
function getProcess(name) {
	return processes[name].process;
}

// Export all of ur shitzors for node module stuff
exports.addProcess = function(name, file) {
	return addProcess(name, file);
}

exports.start = function() {
	return start();
}

exports.getProcess = function(name) {
	return getProcess(name);
}
