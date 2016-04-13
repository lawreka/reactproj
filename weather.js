var Weather = React.createClass({
  getInitialState: function() {
    return {
      nowis: ''
    };
  },

  componentDidMount() {
    this.serverRequest = $.get(this.props.source, function(result) {
      var today = result[0];
      this.setState({
        nowis: today.currently.time
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        The time now is {this.nowis}
      </div>
    );
  }
});
ReactDOM.render(
  <div>
  <Weather source="https://api.forecast.io/forecast/d14c7810a4b1014f9a72be6ea21080a1/37.8267,-122.423" />
  </div>,
  document.getElementById('content')
);
