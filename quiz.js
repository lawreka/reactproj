var data = [
  {id: 1,
    number: 1,
    text: "Pick a color",
    value1img: "quizimages/yellow.jpg",
    value1cap: "Amarillo",
    value1sourc: "spanishdict.com",
    value2img: "quizimages/red.jpg",
    value2cap: "Fiesta",
    value2sourc: "clayhausceramics.com",
    value3img: "quizimages/orange.png",
    value3cap: "Apricot",
    value3sourc: "marus.com"},
  {id: 2,
    number: 2,
    text: "Pick a number",
    value1img: "quizimages/two.jpg",
    value1cap: "Two",
    value1sourc: "datemplate.com",
    value2img: "quizimages/three.jpg",
    value2cap: "Three",
    value2sourc: "shop.360yardware.com",
    value3img: "quizimages/four.jpg",
    value3cap: "Four",
    value3sourc: "numerologystars.com"},
  {id: 3,
    number: 3,
    text: "Pick a fruit",
    value1img: "quizimages/peach.jpg",
    value1cap: "Peach",
    value1sourc: "gourmetsleuth.com",
    value2img: "quizimages/plum.jpg",
    value2cap: "Plum",
    value2sourc: "healthybenefits.info",
    value3img: "quizimages/pear.jpg",
    value3cap: "Pear",
    value3sourc: "nutritious-food.com"},
  {id: 4,
    number: 4,
    text: "Pick a baby animal",
    value1img: "quizimages/kitten.jpg",
    value1cap: "Kitten",
    value1sourc: "alleycat.org",
    value2img: "quizimages/puppy.jpeg",
    value2cap: "Puppy",
    value2sourc: "dogwillingma.com",
    value3img: "quizimages/bunny.jpeg",
    value3cap: "Bunny",
    value3sourc: "polyvore.com"},
  {id: 5,
    number: 5,
    text: "Pick an emoji",
    value1img: "quizimages/happy.png",
    value1cap: "Happy",
    value1sourc: "clios.com",
    value2img: "quizimages/sleepy.jpeg",
    value2cap: "Sleepy",
    value2sourc: "ahundredmonkeys.com",
    value3img: "quizimages/cool.jpeg",
    value3cap: "Cool",
    value3sourc: "polyvore.com"},
  {id: 6,
    number: 6,
    text: "Pick a flower",
    value1img: "quizimages/lily.jpg",
    value1cap: "Lily",
    value1sourc: "libriscrowe.com",
    value2img: "quizimages/daffodil.jpg",
    value2cap: "Daffodil",
    value2sourc: "tattoosymbolism.blogspot.com",
    value3img: "quizimages/carnation.jpg",
    value3cap: "Carnation",
    value3sourc: "mycityflower.co"},
  {id: 7,
    number: 7,
    text: "Pick a berry",
    value1img: "quizimages/blueb.png",
    value1cap: "Blueberry",
    value1sourc: "fruitsvege.com",
    value2img: "quizimages/blackb.jpg",
    value2cap: "Blackberry",
    value2sourc: "fruitvs.com",
    value3img: "quizimages/strawb.jpg",
    value3cap: "Strawberry",
    value3sourc: "myfreshbucket.com"}
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
        <Question number={question.number} key={question.id} text={question.text} value1img = {question.value1img} value1cap={question.value1cap} value1sourc={question.value1sourc} value2img={question.value2img} value2cap={question.value2cap} value2sourc={question.value2sourc} value3img={question.value3img} value3cap={question.value3cap} value3sourc={question.value3sourc}>
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
      opacity: 1.0
    };
  },
  onSelectOne: function(e) {
    result1 = result1 + 1
    this.setState({
      opacity: 0.5
    });
  },
  onSelectTwo: function(e) {
    result2 = result2 + 1
    this.setState({
      opacity: 0.5
    });
  },
  onSelectThree: function(e) {
    result3 = result3 + 1
    this.setState({
      opacity: 0.5
    });
  },
  render: function() {
    return (
      <div className="questiontext" style={{opacity:this.state.opacity}}>
        <div className="questionid">
          Question # {this.props.number}
        </div>
        <div className="questionask">
        {this.props.text}
        </div>
        <form>
          <div className="questionbox">
            <div className="selectionbox">
              <img className="questionimg" src={this.props.value1img}  />
              <div className="imgsource">{this.props.value1sourc}</div>
              <div className="caption">{this.props.value1cap}</div>
            </div>
            <div className="check">
              <input type="radio" name="question" onChange={this.onSelectOne}/>
            </div>
          </div>
          <div className="questionbox">
            <div className="selectionbox">
              <img className="questionimg" src={this.props.value2img} />
              <div className="imgsource">{this.props.value2sourc}</div>
              <div className="caption">{this.props.value2cap}</div>
            </div>
            <div className="check">
              <input type="radio" name="question" onChange={this.onSelectTwo}/>
            </div>
          </div>
          <div className="questionbox">
            <div className="selectionbox">
              <img className="questionimg" src={this.props.value3img} />
              <div className="imgsource">{this.props.value3sourc}</div>
              <div className="caption">{this.props.value3cap}</div>
            </div>
            <div className="check">
              <input type="radio" name="question" onChange={this.onSelectThree}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
});
var result1 = 0;
var result2 = 0;
var result3 = 0;
var winner = '';
var caption = '';
var option1 = <a href="http://www.friendster.com/"><img className="resultimg" src="quizimages/friendsterlogo.png" alt="Friendster"/></a>;
var option2 = <a href="https://myspace.com/"><img className="resultimg" src="quizimages/myspacelogo.png" alt="Myspace"/></a>;
var option3 = <a href="https://ello.co/explore"><img className="resultimg" src="quizimages/ellologo.png" alt="Ello"/></a>;
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
  componentDidUpdate: function() {
    window.scrollTo(0,document.body.scrollHeight);
  },
  resultPicker: function(result1, result2, result3){
    if (result1 > result2){
      winner = option1
      caption = <div>
      <div className="imgsource">Wikimedia Commons</div>
      <h1>Friendster</h1>
      Your mom joined Friendster in 2002, and was probably still active until it <a href="https://en.wikipedia.org/wiki/Friendster">closed permanently</a> in June 2015
      </div>
    }
    else if(result2 > result3){
      winner = option2
      caption = <div>
      <div className="imgsource">Wikimedia Commons</div>
      <h1>Myspace</h1>
      Even Myspace Tom moved on to <a href="https://www.instagram.com/myspacetom/">Instagram</a> in 2014 </div>
    }
    else if(result3 > result1){
      winner = option3
      caption = <div>
      <div className="imgsource">Wikimedia Commons</div>
      <h1>Ello</h1>
      Ello seemed so promising with its <a href="https://ello.co/wtf/about/ello-manifesto/">manifesto</a> claiming not to sell any of your data to advertisers <br></br>...but none of your friends joined
      </div>
    }
    return {
      winner
    };
  },
  render: function() {
      return (
        <div id="results">
          <input type="button" id="resultbutton" value="Get Result" onClick={this.handleClick} />
          <div id="finalanswer" ref="final" style={{opacity:this.state.opacity}}>
            <h3>You got:</h3>
            <div>
            {this.resultPicker.winner} {winner}
            </div>
            {caption}
          </div>
        </div>
    )
  }
});

ReactDOM.render(
  <Quiz data={data}/>,
  document.getElementById('content')
);
