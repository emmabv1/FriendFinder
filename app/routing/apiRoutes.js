

const apis = (app, friends) => {

  var friends = require("./../data/friends.js");


app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });


app.post("/api/friends", function(req, res) {

    var newUser = req.body;

    var userScores = newUser.scores;

    var diff = [];

    for (i=1; i<friends.length; i++) {
      
      var difference = 0;

      for (j=0; j<friends[i].scores.length; j++) {
        difference += Math.abs(friends[i].scores[j] - parseInt(userScores[j]));
      }

      diff.push(difference);
      
    }

    console.log(diff);

    console.log (userScores);

    var min = Math.min(...diff)

    console.log(min);

    var index = diff.indexOf(min);

    console.log(index);

   // var guide = friends[index+1].name;
    //var pic = friends[index+1].photo;

    //console.log(guide);
    //console.log(pic);

    friends[0].hoomans.push(newUser);

    res.json(friends[index+1]);

    // compare data with each array element

    // send back best match data in modal

  });
}

module.exports = apis;