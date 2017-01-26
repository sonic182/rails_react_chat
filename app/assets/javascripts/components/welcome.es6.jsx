class Welcome extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='column row text-center'>
          <h1> Hola Mundo </h1>
        </div>
        <div className='row'>
          <div className='medium-6 large-4 columns'>
            <div className='callout hide'>
              <h2>Some data</h2>
              <a href='/lol'>Lol</a>
            </div>
          </div>
          <div className='medium-6 medium-centered large-4 columns'>
            <Chatbox/>
          </div>
          <div className='medium-6 large-4 columns'>
            <div className='callout hide'>
              <h2>Some other data</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
