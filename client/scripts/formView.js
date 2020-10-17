var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit); // event handler
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log('click!');

    // create a message template
    let message = {
      username: App.username,
      text: $('#message').val(),
      roomname: '#BestRoomEver'
    }

    // create message to be stored to the server
    Parse.create(message);

    // console.log(`This is the message: ${message}`);
    // console.log('message.val:', $('#message').val(message));
    // <input type="text" name="message" id="message"/>
    // <input type="submit" name="submit" class="submit"/>
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};