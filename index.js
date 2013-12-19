// Include our thread manager
var threadManager = require('./threadManager');

// Add processes to manager
threadManager.addProcess('game', './game');
threadManager.addProcess('collision', './collision');
threadManager.addProcess('chat', './chat');

// Start all processes
threadManager.start();

// Now get our processes as nice global vars
var game = threadManager.getProcess('game');
var collision = threadManager.getProcess('collision');
var chat = threadManager.getProcess('chat');


// Talk to a process
game.send('sayhello');
collision.send('sayhello');
chat.send('sayhello');

