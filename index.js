const Slimbot = require('slimbot');
const slimbot = new Slimbot('1182878039:AAE2Px8NwUMqp4JUp3utJayXF5ht4Y5r2Z8');
 
// Register listeners
 
slimbot.on('message', message => {
    console.log(message)
  slimbot.sendMessage(message.chat.id, 'Message received');
});
 
// Call API
 
slimbot.startPolling();