//first require the events module 
const { channel } = require('diagnostics_channel');
const EventEmitter=require('events');

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName)=>{
    console.log(`Thanks for subscribing the ${channelName}`);
}

eventEmitter.addListener('subscribe',subscribeMessage);

eventEmitter.emit('subscribe','college Wallaha')

console.log(`The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);

eventEmitter.setMaxListeners(5);

console.log(`The update maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);