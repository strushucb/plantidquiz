const plants = 
            [{bn:"Ulmus parvifolia", cn:"Chinese Elm"},
              {bn:"Quercus palustris", cn:"Pin Oak / Swamp Oak"},
              {bn:"Quercus douglasii", cn:"Blue Oak"},
              {bn:"Platanus racemosa", cn:"California Sycamore"},
              {bn:"Parthenocissus triscuspidata", cn:"Boston Ivy"},
              {bn: "Liriodendron tulipifera", cn: "Tulip Tree"},
              {bn: "Liquidambar styraciflua", cn: "Liquidambar / American Sweet Gum"},
              {bn: "Gleditsia triacanthos 'Sunburst'", cn: "Sunburst Honey Locust"},
              {bn: "Betula pendula", cn: "European White Birch"},
              {bn: "Aesculus x carnea", cn: "Red Horsechestnut"},
              {bn: "Koelreuteria paniculata", cn: "Golden Rain Tree"},
              {bn: "Ginkgo biloba", cn: "Maidenhair Tree / Ginkgo Tree"},
              {bn: "Fraxinus angustifolia 'Raywood'", cn: "Raywood Ash"},
              {bn: "Corylus avellana 'Contorta'", cn: "Harry Lauder's Walking Stick"},
              {bn: "Cercis occidentalis", cn: "Western Redbud"},
              {bn: "Acer palmatum", cn: "Japanese Maple"},
              {bn: "Pyrus calleryana cvs.", cn: "Flowering Pear / Callery Pear"},
              {bn: "Pistacia chinensis", cn: "Chinese Pistache"},
              {bn: "Morus alba 'Fruitless'", cn: "Fruitless Mulberry"},
              {bn: "Lagerstroemia indica cvs.", cn: "Crape Myrtle"}
              ];

const levenshteinDistance = (str1 = '', str2 = '') => {
     const track = Array(str2.length + 1).fill(null).map(() =>
     Array(str1.length + 1).fill(null));
     for (let i = 0; i <= str1.length; i += 1) {
        track[0][i] = i;
     }
     for (let j = 0; j <= str2.length; j += 1) {
        track[j][0] = j;
     }
     for (let j = 1; j <= str2.length; j += 1) {
        for (let i = 1; i <= str1.length; i += 1) {
           const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
           track[j][i] = Math.min(
              track[j][i - 1] + 1, // deletion
              track[j - 1][i] + 1, // insertion
              track[j - 1][i - 1] + indicator, // substitution
           );
        }
     }
     return track[str2.length][str1.length];
  };

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

class MagicEightBall extends React.Component {
  
  constructor(props) {
    super(props);
    console.log("At top of constructor");
    this.plantList = this.getrandomplants();
    console.log(this.plantList)
    this.state = {
      userInput: '',
      plantDex: 0,
      currentPlant: plants[this.plantList[0]].cn,
      correctAnswer: plants[this.plantList[0]].bn,
      response: "" 
    }
    this.guess = this.guess.bind(this);
    this.newplant = this.newplant.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    console.log("Made it to bottom of constructor");
  }

  getrandomplants() {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    return shuffle(array);
  }

  newplant() {
    let nextDex = (this.state.plantDex + 1 < this.plantList.length) ? this.state.plantDex + 1 : 0;
    this.setState({
      plantDex: nextDex,
      currentPlant: plants[this.plantList[nextDex]].cn,
      correctAnswer: plants[this.plantList[nextDex]].bn,  
      userInput: '',
      response: ''
    });
  }


  guess() {
    console.log("guess is called with "+this.state.userInput+" as the userInput");
    if (this.state.userInput !== '') {
      let distance = levenshteinDistance(this.state.correctAnswer, this.state.userInput.replace("’","'").replace("‘","'"));
      if (distance == 0){
        this.setState({response: "You're correct!"});
      } else {
        this.setState({response: "You're "+distance+" letters away from being correct."});
      }
    }
  }
  
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  handleKeypress(event){
    if (event.key === "Enter") {      
      this.guess();
    } 
  }
  
  render() {

    console.log("Trying to render!");
    const answer = this.state.response;
    
    return (
      <div>
        <div className="question-container">
          <p className="prompt-label">What is the botanical name for {this.state.currentPlant}?</p>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
            onKeyPress={this.handleKeypress}
            />
          <button onClick={this.guess}>
            Submit Answer!
          </button>
        </div>
        
        <div className="ball-container">
          <div className="ball-black-outer">
              <div>
                { (answer !== '') ?
                  <div><p className="prompt-label">{answer}</p></div>
                 :
                  <div className='eight'>🤐</div>
                }
              </div>
          </div>
          <button onClick={this.newplant}>
            Next Plant from Collection 1 or 2!
          </button>
          <div className="ball-shadow"></div>
        </div>
      </div>
    );
  }
};

class App extends React.Component {
  render() {
    return (
      <MagicEightBall/>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
