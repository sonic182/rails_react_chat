class Chatbox extends React.Component {

  constructor(props){
    super(props)
    let chats = []

    this.state = {
      message: '',
      chats: []
    }

    this.styles = {
      chatScroll: {
        height: '200px',
        overflowY: 'scroll',
      }
    }

  }

  componentDidMount(){
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
      let chats = Object.assign([], this.state.chats);
      chats.push({
        message: this.state.message,
        color: '#cb2020',
        user: 'sonic182',
        date: moment()
      })
      this.setState({message: '', chats: chats})
      setTimeout(() => {
        this.chatbox.scrollTop += this.chatbox.scrollHeight;
      }, 10)
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
