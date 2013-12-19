// Chat
process.on('message', function(m){
    if(m == 'sayhello') console.log('chat: Hi there');
    else if(m == 'exit') process.exit();
    process.send('helloback');
});
