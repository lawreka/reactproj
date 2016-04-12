var names = ['Alice', 'Emily', 'Kate'];
var arr = [
  <h1>React is awesome</h1>,
  <h2>React is the worst?</h2>,
];
var HelloMessage = React.createClass({
  render: function() {
    return <div>
      <h1>What {this.props.name}</h1>
      <p>some text</p>
    </div>;
  }
});
var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>;
        })
      }
      </ol>
    );
  }
});
var MyTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return <h1> {this.props.title} </h1>
  }
});
var data = "onetwothree";
var MyComponent = React.createClass({
  handleClick: function() {
    this.refs.myTextInput.focus();
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
});
var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});
var Input = React.createClass({
  getInitialState: function() {
    return {value: 'Hi'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  }
});
var Hello = React.createClass({
  getInitialState: function () {
    return {
      opacity: 1.0
    };
  },
  componentDidMount: function () {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },
  render: function () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
});
var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: '',
    };
  },
  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        {this.state.username}s last gist is
        <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});
var RepoList = React.createClass({
  getInitialState: function() {
    return { loading: true, error: null, data: null};
  },

  componentDidMount() {
    this.props.promise.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  },

  render: function() {
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    else {
      var repos = this.state.data.items;
      var repoList = repos.map(function (repo) {
        return (
          <li>
            <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
          </li>
        );
      });
      return (
        <main>
          <h1>Most Popular JavaScript Projects in Github</h1>
          <ol>{repoList}</ol>
        </main>
      );
    }
  }
});
ReactDOM.render(
  <div>
  {
    names.map(function (name){
      return <div>Hello, {name}!</div>
    })
  }
  {arr}
  <HelloMessage name="?" />
  <NotesList>
    <span>note</span>
    <span>noet</span>
  </NotesList>
  <MyTitle title={data} />
  <MyComponent />
  <LikeButton />
  <Input />
  <Hello name="..............it's me" />
  <UserGist source="https://api.github.com/users/octocat/gists" />
  <RepoList
    promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}
  />
  </div>,
  document.getElementById('content')
);
