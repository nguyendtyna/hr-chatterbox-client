var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function(){
    RoomsView.$select.append(renderedMessage);

  }
  };


  //each message will have a room name
  //grab room name
  //add ??? into array in rooms.js
  //    add object containing all info (username, message, room)