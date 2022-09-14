const plants = 
            [
            {bn: "Acer palmatum", cn: "Japanese Maple", img: "001.jpeg", img2: "001a.jpeg"},  
            {bn: "Cercis occidentalis", cn: "Western Redbud", img:"002.jpeg", img2: "002a.jpeg"},
            {bn: "Corylus avellana 'Contorta'", cn: "Harry Lauder's Walking Stick", img:"003.jpeg", img2: "003a.jpeg"},
            {bn: "Fraxinus angustifolia 'Raywood'", cn: "Raywood Ash", img:"004.jpeg", img2: "004a.jpeg"}, 
            {bn: "Ginkgo biloba", cn: "Maidenhair Tree / Ginkgo Tree", img:"005.jpeg", img2: "005a.jpeg"},
            {bn: "Koelreuteria paniculata", cn: "Golden Rain Tree", img:"006.jpeg", img2: "006a.jpeg"},
            {bn: "Lagerstroemia indica cvs.", cn: "Crape Myrtle", img:"007.jpeg", img2: "007a.jpeg"},
            {bn: "Morus alba 'Fruitless'", cn: "Fruitless Mulberry", img:"008.jpeg", img2: "008a.jpeg"},
            {bn: "Pistacia chinensis", cn: "Chinese Pistache", img:"009.jpeg", img2: "009a.jpeg"},
            {bn: "Pyrus calleryana cvs.", cn: "Flowering Pear / Callery Pear", img:"010.jpeg", img2: "010a.jpeg"},
            {bn: "Aesculus x carnea", cn: "Red Horsechestnut", img:"011.jpeg", img2: "011a.jpeg"}, 
            {bn: "Betula pendula", cn: "European White Birch", img:"012.jpeg", img2: "012a.jpeg"},
            {bn: "Gleditsia triacanthos 'Sunburst'", cn: "Sunburst Honey Locust", img:"013.jpeg", img2: "013a.jpeg"},
            {bn: "Liquidambar styraciflua", cn: "Liquidambar / American Sweet Gum", img:"014.jpeg", img2: "014a.jpeg"},
            {bn: "Liriodendron tulipifera", cn: "Tulip Tree", img:"015.jpeg", img2: "015a.jpeg"},
            {bn:"Parthenocissus tricuspidata", cn:"Boston Ivy", img:"016.jpeg", img2: "016a.jpeg"},
            {bn:"Platanus racemosa", cn:"California Sycamore", img:"017.jpeg", img2: "017a.jpeg"},
            {bn:"Quercus douglasii", cn:"Blue Oak", img:"018.jpeg", img2: "018a.jpeg"},
            {bn:"Quercus palustris", cn:"Pin Oak / Swamp Oak", img:"019.jpeg", img2: "019a.jpeg"},
            {bn:"Ulmus parvifolia", cn:"Chinese Elm", img:"020.jpeg", img2: "020a.jpeg"},
            {bn:"Agapanthus praecox orientalis cvs.",cn:"Lily of the Nile", img:"021.jpeg", img2: "021a.jpeg"},
            {bn:"Dodonaea viscosa 'Purpurea'",cn:"Purple Hopseed Bush", img:"022.jpeg", img2: "022a.jpeg"},
            {bn:"Eucalyptus sideroxylon",cn:"Red Iron Bark Eucalyptus", img:"023.jpeg", img2: "023a.jpeg"},
            {bn:"Fatsia japonica",cn:"Japanese Aralia", img:"024.jpeg", img2: "024a.jpeg"},
            {bn:"Loropetalum chinense 'Razzleberri'",cn:"Razzleberri Fringe Flower", img:"025.jpeg", img2: "025a.jpeg"}, 
            {bn:"Phormium hybrids 'Yellow Wave'",cn:"Yellow Wave Phormium / Yellow Wave New Zealand Flax", img:"026.jpeg", img2: "026a.jpeg"},
            {bn:"Prunus ilicifolia ilicifolia",cn:"Hollyleaf Cherry", img:"027.jpeg", img2: "027a.jpeg"},
            {bn:"Rhus lancea",cn:"African Sumac", img:"028.jpeg", img2: "028a.jpeg"},
            {bn:"Rosa spp. 'White Flower Carpet'",cn:"White Carpet Rose", img:"029.jpeg", img2: "029a.jpeg"},
            {bn:"Salvia leucantha cvs.",cn:"Mexican Bush Sage / Velvet Sage", img:"030.jpeg", img2: "030a.jpeg"}
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
      collection3: true,
      hints: true,
      streak: 0
    }
    this.guess = this.guess.bind(this);
    this.newplant = this.newplant.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleHints = this.handleHints.bind(this);
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
      response: ""
    });
  }


  guess() {
    console.log("guess is called with "+this.state.userInput+" as the userInput");
    if (this.state.userInput !== '') {
      let distance = levenshteinDistance(this.state.correctAnswer, this.state.userInput.replace("’","'").replace("‘","'"));
      if (distance == 0){
        this.setState({response: "You're correct! Press ENTER or 'Next Plant'!", streak: this.state.streak + 1});
      } else {
        this.setState({response: "You're "+distance+" letters away from being correct.",  streak: 0});
      }
    }
  }
  
  handleChange(event) {
    console.log("In handle change");
    this.setState({
      userInput: event.target.value
    });
  }

  handleHints(event){
    this.setState({
      hints: !this.state.hints
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
    if (event.key === "Enter" && this.state.response === "You're correct! Press ENTER or 'Next Plant'!") {
      //console.log("Do a new plant!");      
      this.newplant();
    } else if (event.key === "Enter") {      
      this.guess();
    } 
  }
  
  render() {

    console.log("Trying to render!");
    const answer = this.state.response;
    
    return (
      <div>
        <div className="question-container">
          <p className="prompt-label">What is the botanical name for this plant?</p>
          <img src={"images/"+plants[this.state.plantList[this.state.plantDex]-1].img+""}/>
          <img src={"images/"+plants[this.state.plantList[this.state.plantDex]-1].img2+""}/>
          { (this.state.hints) ?
              <p className="prompt-label">Hint: its common name is {this.state.currentPlant}.</p>
              :
              <p className="prompt-label"> ... </p>
          }

          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
            onKeyPress={this.handleKeypress}
            />
          <div className="butt-container"> <button onClick={this.guess}>
            Submit Answer (or press ENTER)!
          </button>
          <table><tr><td><p className="streak-label"> Streak:</p></td></tr>
          <tr><td><p className="streak-label">{this.state.streak}</p></td></tr>
          </table>
          <button onClick={this.newplant}>
            Next Plant!
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
          <div>
              <label htmlFor="hints">
                 <input className="checkbox" type="checkbox" id="hints" name="hints" checked={this.state.hints} onChange={this.handleHints}/> Show Common Name 
              </label>
          </div>
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
