const plants = 
            [
            {bn: "Acer palmatum", cn: "Japanese Maple"},  
            {bn: "Cercis occidentalis", cn: "Western Redbud"},
            {bn: "Corylus avellana 'Contorta'", cn: "Harry Lauder's Walking Stick"},
            {bn: "Fraxinus angustifolia 'Raywood'", cn: "Raywood Ash"}, 
            {bn: "Ginkgo biloba", cn: "Maidenhair Tree / Ginkgo Tree"},
            {bn: "Koelreuteria paniculata", cn: "Golden Rain Tree"},
            {bn: "Lagerstroemia indica cvs.", cn: "Crape Myrtle"},
            {bn: "Morus alba 'Fruitless'", cn: "Fruitless Mulberry"},
            {bn: "Pistacia chinensis", cn: "Chinese Pistache"},
            {bn: "Pyrus calleryana cvs.", cn: "Flowering Pear / Callery Pear"},
            {bn: "Aesculus x carnea", cn: "Red Horsechestnut"}, 
            {bn: "Betula pendula", cn: "European White Birch"},
            {bn: "Gleditsia triacanthos 'Sunburst'", cn: "Sunburst Honey Locust"},
            {bn: "Liquidambar styraciflua", cn: "Liquidambar / American Sweet Gum"},
            {bn: "Liriodendron tulipifera", cn: "Tulip Tree"},
            {bn:"Parthenocissus triscuspidata", cn:"Boston Ivy"},
            {bn:"Platanus racemosa", cn:"California Sycamore"},
            {bn:"Quercus douglasii", cn:"Blue Oak"},
            {bn:"Quercus palustris", cn:"Pin Oak / Swamp Oak"},
            {bn:"Ulmus parvifolia", cn:"Chinese Elm"},
            {bn:"Agapanthus praecox orientalis cvs.",cn:"Lily of the Nile"},
            {bn:"Dodonaea viscosa 'Purpurea'",cn:"Purple Hopseed Bush"},
            {bn:"Eucalyptus sideroxylon",cn:"Red Iron Bark Eucalyptus"},
            {bn:"Fatsia japonica",cn:"Japanese Aralia"},
            {bn:"Loropetalum chinense 'Razzleberri'",cn:"Razzleberri Fringe Flower"}, 
            {bn:"Phormium hybrids 'Yellow Wave'",cn:"Yellow Wave Phormium / Yellow Wave New Zealand Flax"},
            {bn:"Prunus ilicifolia ilicifolia",cn:"Hollyleaf Cherry"},
            {bn:"Rhus lancea",cn:"African Sumac"},
            {bn:"Rosa spp. 'White Flower Carpet'",cn:"White Carpet Rose"},
            {bn:"Salvia leucantha cvs.",cn:"Mexican Bush Sage / Velvet Sage"}
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
    this.plantList = this.getrandomplants(true,true,true);
    console.log(this.plantList)
    this.state = {
      userInput: '',
      plantDex: 0,
      plantList: this.plantList,
      currentPlant: plants[this.plantList[0]-1].cn,
      correctAnswer: plants[this.plantList[0]-1].bn,
      response: "",
      collection1: true,
      collection2: true,
      collection3: true
    }
    this.guess = this.guess.bind(this);
    this.newplant = this.newplant.bind(this);
    this.handleChange = this.handleChange.bind(this);
        this.handleBox1 = this.handleBox1.bind(this);
            this.handleBox2 = this.handleBox2.bind(this);
                this.handleBox3 = this.handleBox3.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    console.log("Made it to bottom of constructor");
  }

  getrandomplants(col1, col2, col3) {
    let array = []
    if(col1){
      array.push(1,2,3,4,5,6,7,8,9,10)
    }
    if(col2){
      array.push(11,12,13,14,15,16,17,18,19,20)
    }
    if(col3){
      array.push(21,22,23,24,25,26,27,28,29,30)
    }
    return shuffle(array);
  }

  newplant() {
    let nextDex = (this.state.plantDex + 1 < this.state.plantList.length) ? this.state.plantDex + 1 : 0;
    this.setState({
      plantDex: nextDex,
      currentPlant: plants[this.state.plantList[nextDex]-1].cn,
      correctAnswer: plants[this.state.plantList[nextDex]-1].bn,  
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

  handleBox1(event) {
    if(!this.state.collection2 && !this.state.collection3) return;
    let newplantlist = this.getrandomplants(!this.state.collection1,this.state.collection2,this.state.collection3);
    this.setState({
      userInput: '',
      plantDex: 0,
      plantList: newplantlist,
      currentPlant: plants[newplantlist[0]-1].cn,
      correctAnswer: plants[newplantlist[0]-1].bn,
      response: "",
      collection1: !this.state.collection1
    });
  }

  handleBox2(event) {
    if(!this.state.collection1 && !this.state.collection3) return;
    let newplantlist = this.getrandomplants(this.state.collection1,!this.state.collection2,this.state.collection3);
    this.setState({
      userInput: '',
      plantDex: 0,
      plantList: newplantlist,
      currentPlant: plants[newplantlist[0]-1].cn,
      correctAnswer: plants[newplantlist[0]-1].bn,
      response: "",
      collection2: !this.state.collection2
    });
  }

  handleBox3(event) {
    if(!this.state.collection1 && !this.state.collection2) return;
    let newplantlist = this.getrandomplants(this.state.collection1,this.state.collection2,!this.state.collection3);
    this.setState({
      userInput: '',
      plantDex: 0,
      plantList: newplantlist,
      currentPlant: plants[newplantlist[0]-1].cn,
      correctAnswer: plants[newplantlist[0]-1].bn,
      response: "",
      collection3: !this.state.collection3
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
            Next Plant!
          </button>
        <div className="collection-container">
              <label htmlFor="collection1">
                 <input className="checkbox" type="checkbox" id="collection1" name="col1" checked={this.state.collection1} onChange={this.handleBox1}/> Include Collection 1 
              </label>
              <label htmlFor="collection2">
                 <input className="checkbox" type="checkbox" id="collection2" name="col2" checked={this.state.collection2} onChange={this.handleBox2}/> Include Collection 2 
              </label>
              <label htmlFor="collection3">
                 <input className="checkbox" type="checkbox" id="collection3" name="col3" checked={this.state.collection3} onChange={this.handleBox3}/> Include Collection 3 
              </label>
          </div>
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
