class Chatbox extends React.Component {

  constructor(props){
    super(props)
    let chats = []

    this.state = {
      message: '',
      chats: [],
      user: 'sonic182',
      color: this.getRandomColor()
    }

    this.styles = {
      chatScroll: {
        height: '200px',
        overflowY: 'scroll',
      }
    }

    this.connectChannel.bind(this)
    this.getMessage.bind(this)
  }

  connectChannel () {
    this.channel = App.chat({
      connected: function(data) {
        // Called when the subscription is ready for use on the server
        console.log('connected')
      },

      disconnected: function() {
        // Called when the subscription has been terminated by the server
        console.log('disconnected')
      },

      received: this.getMessage()
    })
  }

  getMessage() {
    var $this = this
    return function(data){
      // Called when there's incoming data on the websocket for this channel
      data.date = moment(data.date)

      let chats = Object.assign([], $this.state.chats);
      chats.push(data)
      $this.setState({message: '', chats: chats})
      setTimeout(() => {
        $this.chatbox.scrollTop += $this.chatbox.scrollHeight;
      }, 10)
    }
  }

  sendMessage(data){
    this.channel.send(data)
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  componentDidMount(){
    this.setState({user: prompt('Nombre de usuario')})
    this.connectChannel()
    this.chatbox = document.getElementById('chatboxScrollBottom');
  }

  componentWillUnmount(){
    // alert('unmounting')
  }

  handleInput (ev) {
    this.setState({message: ev.target.value})
  }

  handleKeyPress (ev) {
    if (ev.keyCode == 13 && this.state.message.match(/\w/)) {
      this.sendMessage({
        message: this.state.message,
        color: this.state.color,
        user: this.state.user,
        date: moment()
      })
    }
  }

  render () {
    return (
      <div className="card">
        <div className="card-divider">
          This is your chat!
        </div>
        <div id="chatboxScrollBottom" className="card-section" style={this.styles.chatScroll}>
          {this.state.chats.map((c) => {
            return (<Chat key={this.state.chats.indexOf(c)} chat={c} />)
          })}
        </div>
        <input type='text'
          onKeyDown={this.handleKeyPress.bind(this)}
          onInput={this.handleInput.bind(this)}
          placeholder='Text here your message'
          value={this.state.message}/>
      </div>
    );
  }
}
