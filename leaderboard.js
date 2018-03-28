PlayerList = new Mongo.Collection('players');

if (Meteor.isClient) {
    console.log("Hello world!");
    
    Template.leaderboard.player = function() {
        return "Some other text";
    }
}
