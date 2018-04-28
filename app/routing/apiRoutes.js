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

    var min = Math.min(...diff)

    var index = diff.indexOf(min);

    friends[0].hoomans.push(newUser);

    res.json(friends[index+1]);

  });
}

module.exports = apis;