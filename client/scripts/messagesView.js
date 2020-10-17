var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  render: function () {
    // Render all messages

    // iterate through data.results array
    for (var i = 0; i < Messages._data.results.length; i++) {
      if (Messages._data.results[i].username  && Messages._data.results[i].text && Messages._data.results[i].roomname) {
        this.renderMessage(Messages._data.results[i])
      };
    }

  },

  renderMessage: function (message) {
    // Render a single message

    let renderedMessage = MessageView.render(message);
    // console.log('rendered message:', renderedMessage);
    MessagesView.$chats.append(renderedMessage);
  },
};


/*

api.jquery.com/append example:

<h2>Greetings</h2>
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>

$( ".inner" ).append( "<p>Test</p>" ); ==> to create content and insert it to desired element

TODO:
- we want to create a message
      - create a test message for now
      - use messages.js or messageView.js ?
      - MessageView.render ==> gives us the template we want for our messages
- append the message to the "chats" div

*/