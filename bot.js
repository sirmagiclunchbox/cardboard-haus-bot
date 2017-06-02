console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

//
//  tweet 'hello world!'
//
T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})
var params = {
  q: 'banana since:2011-07-11',
  count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  console.log(data)
}
