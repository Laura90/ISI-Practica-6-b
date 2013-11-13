Template.messages.messages = function(){
   return Messages.find({},{sort:{time:-1}});
   
}

Template.leaderboard.players = function () {
    return Players.find({}, {sort: {score: -1}});
};

Template.input.events = {
   'keydown input#message' : function(event){
      if (event.which == 13){
            if (Meteor.user()){
               var name = Meteor.user().username;
             }else{
               var name = 'Anonymous';
            }
         var message = $('#message');
         if (message.val() != ''){
            Messages.insert({name : name , message: message.val() , time: Date.now()});
            message.val('');
         }
      }
      if (event.which == 66) {
         var message = $('#message');
         var value = message.val();
         message.val(value + "b");
      }
      if (event.which == 78) {
         var message = $('#message');
         var value = message.val();
         message.val(value + "n");
      }
      if (event.which == 32) {
         var message = $('#message');
         var value = message.val();
         message.val(value + " ");
      }
    }
}

Accounts.ui.config ({
   passwordSignupFields:'USERNAME_AND_OPTIONAL_EMAIL'});
   
   
//Deps.ouTorun---cliente

//clientes---> Method.call
//Servidor ---> Meteor.methods
