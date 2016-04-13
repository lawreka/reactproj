var Photo = React.createClass({

  toggleLiked: function() {
    this.setState({
      liked: !this.state.liked
    });
  },

  getInitialState: function() {
    return {
      liked: false
    };
  },

  render: function() {
    var buttonClass = this.state.liked ? 'Dislike' : 'Like';
    var faceSource = this.state.liked ? 'http://emojipedia-us.s3.amazonaws.com/cache/4a/bc/4abc340cf5d893ff4bf6ebc17b29c221.png' : 'http://emojipedia-us.s3.amazonaws.com/cache/4e/bb/4ebb849a2fe5cb7f2f5945f404d1857c.png'

    return (
      <div className='photo'>
        <img src={faceSource} />

        <div className='bar'>
          <button onClick={this.toggleLiked} className={buttonClass}>
          {buttonClass}
          </button>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Photo src="http://emojipedia-us.s3.amazonaws.com/cache/52/5f/525f64a4bfac9c9cffbbd115a8ca3912.png"/>,
  document.getElementById('content')
);
