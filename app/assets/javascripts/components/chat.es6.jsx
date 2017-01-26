class Chat extends React.Component {
  render () {
    const {
      message,
      user,
      color,
      date
    } = this.props.chat
    return (
      <div className='chat'>
        <div className='chat-header'>
          <span className='user' style={{color: color || '#970eb3'}}>{user}</span> <small className="date float-right">{date ? date.fromNow() : 'a few secconds ago'}</small>
          <br/>
        </div>
        <p className='chat-message'>
        {message}
        </p>
      </div>
    );
  }
}
