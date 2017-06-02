console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

// Events and Functions for Reply Event
var stream = T.stream('user');
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
  var replyto = eventMsg.in_reply_to_screen_name;
  var text = eventMsg.text;
  var from = eventMsg.user.screen_name;
  console.log(replyto + ' ' + from);

  if (replyto === 'cardboard_haus') {
    var tweetreply = '@' + from + ' hey, you got a problem?! You want to fight?';
    tweetResponse(tweetreply);
  }
}

// Events and functions for Follow Event
var stream = T.stream('user');
stream.on('follow', followed);

function followed(eventMsg) {
    console.log('follow event')
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetResponse('@' + screenName + ' yo fam! how r u doing?');
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
    }
  }
}
