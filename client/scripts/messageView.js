var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"> <%=username %> </div>
        <div class="text"> <%=text %> </div>
        <div class="roomname"><%= roomname %></div>
        </div>
    `)
};

/*
From underscorejs:
  var compiled = _.template("hello: <%= name %>");
  compiled({name: 'moe'});
  => "hello: moe"

  => let message = {
    username:
    text:
    roomname:
  }

From gLearn:
- message objects sent to the parse server should be in this format:
  var message = {
    username: 'shawndrost',
    text: 'trololo',
    roomname: '4chan'
  };
*/