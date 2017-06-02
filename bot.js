console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');
stream.on('follow', followed);

function followed(eventMsg) {
    console.log('follow event')
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetResponse('@' + screenName + ' whats up my dude!?');
}

function tweetResponse(txt){
  var tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong!");
    } else {
        console.log("It's working!")
    }}
}
