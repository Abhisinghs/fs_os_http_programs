//first require the events module 
const { channel } = require('diagnostics_channel');
const EventEmitter=require('events');

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName)=>{
    console.log(`Thanks for subscribing the ${channelName}`);
}

eventEmitter.addListener('subscribe',subscribeMessage);

console.log("Calling event listner after removing the event.");
eventEmitter.removeListener("subscribe", subscribeMessage);

eventEmitter.emit('subscribe','college Wallaha')