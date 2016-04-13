var Quiz = React.createClass({
  render: function() {
    return (
      <div>
        <Question />
        <Questext />
        <h1>Result</h1>
      </div>
    )
  }
});
var questions = ['1', '2', '3'];
var texts = ['uno', 'dos', 'tres'];
var Question = React.createClass({
  render: function() {
    return (
      <div>
      {
        questions.map(function (question){
          return (
            <div>Question #{question}</div>
          )
        })
      }
      </div>
    )
  }
});
var Questext = React.createClass({
  render: function() {
    return (
      <div>
      {
        texts.map(function (tex){
          return (
            <div>{tex}</div>
          )
        })
      }
      </div>
    )
  }
});


ReactDOM.render(
  <Quiz />,
  document.getElementById('content')
);
