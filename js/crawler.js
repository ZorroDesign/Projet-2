var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = "http://justshows.com/ottawa/";

request({ "uri": url }, function(err, resp, body) {

  var $ = cheerio.load(body);

  var events = [];

  $('.shows').find('li').each(function(index,item) {
    var artist = $(this).children('a').children('.description-venue').children('.description').children('.summary').children('span[itemprop=performers]').text();
    var day = $(this).children('a').children('.date').children('time').children('.day').text();
    var time = $(this).children('a').children('.date').children('time').children('.time').text();
    var venue = $(this).children('a').children('.description-venue').children('.venue').children('.location').children('span[itemprop=name]').text();
    var price = $(this).children('a').children('.description-venue').children('.venue').children('.venue-meta').children('span').text();

    var event = {
      'artist': artist,
      'day': day,
      'time': time,
      'venue': venue,
      'price': price,
    };

    events.push(event);

  });

  fs.writeFile("./generatelist.json", JSON.stringify(events), function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("Le fichier a été créé et enregistré!");
  });

});
