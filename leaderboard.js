PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
    Template.leaderboard.helpers({
        'player': function(){
            return PlayersList.find();
        },
        'selectedClass': function(){
            var playerId = this._id;
            var selectedPlayer = Session.get('selectedPlayer');
            if(playerId == selectedPlayer){
                return "selected"
            }
        } ,
        'selectedPlayer': function(){
            var selectedPlayer = Session.get('selectedPlayer');
            return PlayersList.findOne({ _id: selectedPlayer });
} 
    });
    
    Template.leaderboard.events({
        'click .player': function(){
            var playerId = this._id;
            Session.set('selectedPlayer', playerId);
        },
        'click .increment': function(){
            var selectedPlayer = Session.get('selectedPlayer');
            PlayersList.update({ _id: selectedPlayer }, { $inc: {score: 5} });
        },
        'click .decrement': function(){
            var selectedPlayer = Session.get('selectedPlayer');
            PlayersList.update({ _id: selectedPlayer }, {$inc: {score: -5} });
        },

        'submit form': function(event){
            event.preventDefault();
            var playerNameVar = event.target.playerName.value;
            PlayersList.insert({
                name: playerNameVar,
                score: 0
            });
            event.target.playerName.value = "";

        },
        'click .remove': function(){
            var selectedPlayer = Session.get('selectedPlayer');
            PlayersList.remove({ _id: selectedPlayer });
            }
            
            
    });
}

if(Meteor.isServer){
    // this code only runs on the server
}
