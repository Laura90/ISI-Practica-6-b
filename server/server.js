Meteor.startup(function () {
   Meteor.methods({

        score: function (puntuacion) {
             if (Meteor.user()){
               var name = Meteor.user().username;
             }else{
               var name = 'Anonymous';
             }
             Players.insert({name : name , score: puntuacion});
             
         }
    });
});
