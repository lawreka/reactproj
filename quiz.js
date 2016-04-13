var data = [
  {id: 1, number: 1, text: "This is the question"},
  {id: 2, number: 2, text: "This is another question"},
  {id: 3, number: 3, text: "This is a third"},
  {id: 4, number: 4, text: "This is the fourth"},
  {id: 5, number: 5, text: "Fifth"},
  {id: 6, number: 6, text: "Sixth"},
  {id: 7, number: 7, text: "Etc etc"}
];

var Quiz = React.createClass({
  render: function() {
    return (
      <div>
        <QuestionList data={this.props.data}/>
        <Result />
      </div>
    )
  }
});
var QuestionList = React.createClass({
  render: function() {
    var questions = this.props.data.map(function(question) {
      return(
        <Question number={question.number} key={question.id}>
          {question.text}
        </Question>
      );
    });
    return (
      <div className="questionList">
        {questions}
      </div>
    )
  }
});
var Question = React.createClass({
  render: function() {
    return (
      <div className="questiontext">
        <h2 className="questionid">
          Question # {this.props.number}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var Result = React.createClass({
  getInitialState: function () {
    return {
      opacity: 0
    };
  },
  handleClick: function() {
    this.setState({
      opacity: 1.0
    });
  },
  render: function() {
    return (
      <div>
        <input type="button" value="Get Result" onClick={this.handleClick} />
        <div style={{opacity:this.state.opacity}}>
          This is a result.
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <Quiz data={data}/>,
  document.getElementById('content')
);
