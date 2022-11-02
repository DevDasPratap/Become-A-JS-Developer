const EventEmiter = require('events'); // EventEmmiter = class
const event = new EventEmiter(); // Create object

//Define event (* first define then create event)
event.on('callMyName', ()=>{
    console.log('My name is Pratap');
})

event.emit('callMyName') // create event


event.on('click', ()=>{
    console.log('Clicked vai event: ');
})
event.emit('click');