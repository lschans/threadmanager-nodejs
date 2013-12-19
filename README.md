threadmanager-nodejs
====================

A threadmanager for node.js, if this finally works it will make threading available in a simple way for everyone.

## Requirements
* NodeJS
* Common sense

The idea behind this project is to make threadmanager that forks working threads for different tasks instead of forking a single process.

## What is should do
* Create a threadmanager object that keeps track of all threads in an array.
* Give a thread process access to other threaded processes in a simple way like if its just another object in your single threaded app
* Automagicly stringyfy objects to JSON send them to another process and make it an object again
* more awesome stuff

