var friendsArray = require("../data/friends.js");

		module.exports = function(app) {
			
			app.get("/api/friends", function(req, res) {
				res.json(friendsArray);
			})

			app.post("/api/friends", function(req, res)  {

				var bestMatch = {
					status: 'err',
					name: "",
					friendDifference: 1000
				};


				var totalDifference = 0

				for (var i = 0; i < friendsArray.length; i++) {
					totalDifference = 0;

//					for (var j = 0; j < friendsArray[i].ans[j]; j++) {
					for (var j = 0; j < 10; j++) {

						totalDifference += Math.abs(parseInt(req.body.ans[j])) - parseInt(friendsArray[i].ans[j])
                        
                        totalDifference = Math.abs(totalDifference)

					}

					if (totalDifference < bestMatch.friendDifference) {
						bestMatch.name = friendsArray[i].name;
						bestMatch.friendDifference = totalDifference;
						bestMatch.pix = friendsArray[i].pix;
					}

				}

				friendsArray.push(req.body);

				res.json({status:'OK',name: bestMatch.name,pix:bestMatch.pix});			
			})
		};
		
