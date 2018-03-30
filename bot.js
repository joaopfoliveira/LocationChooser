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

//login stuff
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.BOT_TOKEN);


//real code
//INTIALIZE DATA
function Location(name) {
    this.name = name;
    this.totalOcurrences = 0;
}

var allLocations = [];

var allLocationsNames = ['Anarchy Acres', 'Dusty Depot', 'Fatal Fields','Flush Factory','Greasy Grove',
'Haunted Hills','Junk Junction','Lonely Lodge','Lucky Landing','Moisty Mire','Pleasant Park',
'Retail Row','Salty Springs','Shifty Shafts','Snobby Shores','Tilted Towers','Wailing Woods',
'Flush 2'];    

for(var i = 0; i < allLocationsNames.length;i++){
    allLocations[i] = (new Location(allLocationsNames[i]));
}

var locationsOcurrences;


// FUNCTIONS

function randomWithProbability() {
    var notRandomNumbers = [
                            allLocationsNames.indexOf('Anarchy Acres'), allLocationsNames.indexOf('Anarchy Acres'),
                            allLocationsNames.indexOf('Dusty Depot'),
                            allLocationsNames.indexOf('Fatal Fields'),allLocationsNames.indexOf('Fatal Fields'),
                            allLocationsNames.indexOf('Flush Factory'),allLocationsNames.indexOf('Flush Factory'),
                            allLocationsNames.indexOf('Greasy Groove'),
                            allLocationsNames.indexOf('Haunted Hills'),
                            allLocationsNames.indexOf('Junk Junction'),
                            allLocationsNames.indexOf('Lonely Lodge'),
                            allLocationsNames.indexOf('Lucky Landing'),
                            allLocationsNames.indexOf('Moisty Mire'),
                            allLocationsNames.indexOf('Pleasent Park'),allLocationsNames.indexOf('Pleasent Park'),allLocationsNames.indexOf('Pleasent Park'),
                            allLocationsNames.indexOf('Retail Row'),allLocationsNames.indexOf('Retail Row'),allLocationsNames.indexOf('Retail Row'),
                            allLocationsNames.indexOf('Salty Springs'),allLocationsNames.indexOf('Salty Springs'),allLocationsNames.indexOf('Salty Springs'),
                            allLocationsNames.indexOf('Shifty Shafts'),
                            allLocationsNames.indexOf('Snobby Shores'),allLocationsNames.indexOf('Snobby Shores'),allLocationsNames.indexOf('Snobby Shores'),
                            allLocationsNames.indexOf('Tilted Towers'),allLocationsNames.indexOf('Tilted Towers'),
                            allLocationsNames.indexOf('Wailing Woods'),
                            allLocationsNames.indexOf('Flush 2'),
                            ];



    var idx = Math.floor(Math.random() * notRandomNumbers.length);
    return notRandomNumbers[idx];
  }

function chooseMap() {
    var n = randomWithProbability();
    updateTotalTimesLocalGetChosen(n);
    message.channel.sendMessage(allLocations[n]);
}

function updateTotalTimesLocalGetChosen(localID){
    allLocations[localID].totalOcurrences++;
}   

function getTotalOccurencesOfLocations(){
    message.channel.sendMessage('TESTEEEEEEEEE');
    var totalString;
    for(var i = 0 ; i < allLocations.length;i++){
        message.channel.sendMessage((allLocations[i].name + ' - ' + allLocations[i].totalOcurrences + '\n'));
        //totalString+=(allLocations[i].name + ' - ' + allLocations[i].totalOcurrences + '\n');
    }
    //return totalString;
}

//COMMANDS AND ACTIONS:
bot.on('message',(message)=>{
    if(message.content =='!map'){
       //var chosenN = chooseMap();
       var n = Math.floor((Math.random()*allLocations.length-1));
       message.channel.sendMessage(allLocations[n].name);
       updateTotalTimesLocalGetChosen(n);
       //chooseMap();
       //updateTotalTimesLocalGetChosen(n);
    }
    if(message.content == '!mapstats'){

        var totalString = '';
        for(var i = 0 ; i < allLocations.length;i++){
            totalString+=(allLocations[i].name + ' - ' + allLocations[i].totalOcurrences + '\n');
        }
        message.channel.sendMessage(totalString);
    }
    if(message.content == '!tou?'){
        message.channel.sendMessage('sim');
    }
});


