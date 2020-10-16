var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  renderMessage: function (message) {
    //expect($('#chats').children().length).to.equal(1);
    //children() does this: Get the children of each element in the set of matched elements, optionally filtered by a selector
    //we want to add the message to be a child of $('#chats')
    console.log(MessagesView.$chats);
    MessagesView.$chats.append(message);
    console.log(MessagesView.$chats);
    console.log(MessagesView);
  },




};


/*

api.jquery.com/append example:

<h2>Greetings</h2>
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>

$( ".inner" ).append( "<p>Test</p>" ); ==> to create contnet and insert it to desired element

TODO:
- we want to create a message
      - create a test message for now
      - use messages.js or messageView.js ?
      - MessageView.render ==> gives us the template we want for our messages
- append the message to the "chats" div

*/