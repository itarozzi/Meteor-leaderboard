PlayerList = new Mongo.Collection('players');

if (Meteor.isClient) {
    console.log("Hello world!");
    
    Template.leaderboard.helpers ({
        'player': function(){
            return "Some other text";
        }

        
    });
}
