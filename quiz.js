var data = [
  {id: 1, number: 1, text: "This is the question", value1: "Banana", value2: "Grapefruit", value3: "Lingonberry"},
  {id: 2, number: 2, text: "This is another question", value1: "Banana", value2: "Grapefruit", value3: "Lingonberry"},
  {id: 3, number: 3, text: "This is a third", value1: "Banana", value2: "Grapefruit", value3: "Lingonberry"},
  {id: 4, number: 4, text: "This is the fourth", value1: "Banana", value2: "Grapefruit", value3: "Lingonberry"},
  {id: 5, number: 5, text: "Fifth", value1: "Banana", value2: "Grapefruit", value3: "Lingonberry"},
  {id: 6, number: 6, text: "Sixth", value1: "Banana", value2: "Grapefruit", value3: "Lingonberry"},
  {id: 7, number: 7, text: "Etc etc", value1: "Banana", value2: "Grapefruit", value3: "Lingonberry"}
];
var result1 = 0;
var result2 = 0;
var result3 = 0;
var winner = '';
var option1 = "YES";
var option2 = "NO";
var option3 = "MAYBE";
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
        <Question number={question.number} key={question.id} text={question.text} value1={question.value1} value2={question.value2} value3={question.value3}>
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
  getInitialState: function() {
    return {
    };
  },
  onSelectOne: function(e) {
    result1 = result1 + 1
  },
  onSelectTwo: function(e) {
    result2 = result2 + 1
  },
  onSelectThree: function(e) {
    result3 = result3 + 1
  },
  render: function() {
    return (
      <div className="questiontext" >
        <div className="questionid">
          Question # {this.props.number}
        </div>
        {this.props.text}
        <form>
          <input type="radio" name="question" onChange={this.onSelectOne}/>{this.props.value1}
          <input type="radio" name="question" onChange={this.onSelectTwo}/>{this.props.value2}
          <input type="radio" name="question" onChange={this.onSelectThree}/>{this.props.value3}
        </form>
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
    this.resultPicker(result1, result2, result3)
  },
  resultPicker: function(result1, result2, result3){
    if (result1 > result2){
      winner = option1
    }
    else if(result2 > result3){
      winner = option2
    }
    else if(result3 > result1){
      winner = option3
    }
    return {
      winner
    };
  },
  render: function() {
    return (
      <div>
        <input type="button" value="Get Result" onClick={this.handleClick} />
        <div id="finalanswer" style={{opacity:this.state.opacity}}>
          This is the result: {this.resultPicker.winner} {winner}
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <Quiz data={data}/>,
  document.getElementById('content')
);
