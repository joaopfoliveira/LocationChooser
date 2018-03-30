/*var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);

logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
*/
console.log("Hello world");
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NDI5MDMzNDc5Njc4NzIyMDQ4.DZ7wJw.HSZCVWAjh9wOiLBzpAUKedzFxPc');

var allLocations = ['Anarchy Acres', 'Dusty Depot', 'Fatal Fields','Flush Factory','Greasy Grove',
'Haunted Hills','Junk Junction','Lonely Lodge','Loot Lake','Lucky Landing','Moisty Mire','Pleasant Park',
'Retail Row','Salty Springs','Shifty Shafts','Snobby Shores','Tilted Towers','Tomato Town','Wailing Woods',
'Flush 2', 'GUS'];    

bot.on('message',(message)=>{
    if(message.content =='!map'){
        var n = Math.floor((Math.random()*allLocations.length-1));
        message.channel.sendMessage(allLocations[n]);
    }
    if(message.content =='!noodles'){
        message.channel.sendMessage('tem sal p crl.');
    }
    if(message.content =='ping'){
        message.channel.sendMessage('pong caralho');
    }
});